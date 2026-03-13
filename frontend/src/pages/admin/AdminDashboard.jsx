import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Trash2, Eye, EyeOff, Calendar, User, Phone, Briefcase, Plus, GripHorizontal, FileText, Download, LogOut } from 'lucide-react';
import { io } from 'socket.io-client';

const API_URL = import.meta.env.VITE_API_URL || 'https://jones-boldvizbyte.onrender.com/api';
let socket;

const AdminDashboard = () => {
    // ---- AUTH STATE ----
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [failedAttempts, setFailedAttempts] = useState(() => parseInt(localStorage.getItem('boldviz_admin_failed_attempts') || '0'));
    const [lockoutUntil, setLockoutUntil] = useState(() => parseInt(localStorage.getItem('boldviz_admin_lockout_until') || '0'));
    const [lockoutRemaining, setLockoutRemaining] = useState(0);

    // ---- LEADS STATE ----
    const [leads, setLeads] = useState([]);
    const [filter, setFilter] = useState('All');
    const [selectedLead, setSelectedLead] = useState(null);

    // ---- TABS STATE ----
    const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'services', 'careers'

    // ---- CMS STATE: SERVICES ----
    const [customServices, setCustomServices] = useState([]);
    const [newService, setNewService] = useState({ title: '', desc: '', bestFor: '' });

    // ---- CMS STATE: CAREERS ----
    const [customCareers, setCustomCareers] = useState([]);
    const [newCareer, setNewCareer] = useState({ title: '', type: 'Internship', loc: '', desc: '' });

    // ---- CUSTOM AUTH & DATA SUBSCRIPTIONS ----
    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsAuthLoading(false);
    }, []);

    useEffect(() => {
        if (!isAuthenticated) return;

        // 1. Initialize Socket
        socket = io(API_URL.replace('/api', ''));

        // 2. Fetch Initial Data via REST
        const fetchInitialData = async () => {
            try {
                const token = localStorage.getItem('admin_token');
                const headers = { 'Authorization': `Bearer ${token}` };

                const [leadsRes, servicesRes, careersRes] = await Promise.all([
                    fetch(`${API_URL}/leads`, { headers }),
                    fetch(`${API_URL}/services`),
                    fetch(`${API_URL}/careers`)
                ]);

                if (leadsRes.ok) setLeads(await leadsRes.json());
                if (servicesRes.ok) setCustomServices(await servicesRes.json());
                if (careersRes.ok) setCustomCareers(await careersRes.json());
            } catch (error) {
                console.error("Error fetching initial data:", error);
                if (error.message.includes("401")) handleLogout(); // Token expired
            }
        };

        fetchInitialData();

        // 3. Setup Socket Listeners
        socket.on('new_lead', (newLead) => {
            setLeads((prev) => [newLead, ...prev]);
        });
        socket.on('lead_deleted', (id) => {
            setLeads((prev) => prev.filter(l => l.id !== id));
            if (selectedLead?.id === id) setSelectedLead(null);
        });

        socket.on('new_service', (newService) => {
            setCustomServices((prev) => [newService, ...prev]);
        });
        socket.on('service_deleted', (id) => {
            setCustomServices((prev) => prev.filter(s => s.id !== id));
        });

        socket.on('new_career', (newCareer) => {
            setCustomCareers((prev) => [newCareer, ...prev]);
        });
        socket.on('career_deleted', (id) => {
            setCustomCareers((prev) => prev.filter(c => c.id !== id));
        });

        return () => {
            if (socket) socket.disconnect();
        };
    }, [isAuthenticated]);

    // Handle Lockout Timer
    useEffect(() => {
        if (lockoutUntil > Date.now()) {
            const interval = setInterval(() => {
                const remaining = Math.max(0, lockoutUntil - Date.now());
                setLockoutRemaining(remaining);
                if (remaining === 0) {
                    setFailedAttempts(0);
                    setLockoutUntil(0);
                    localStorage.removeItem('boldviz_admin_failed_attempts');
                    localStorage.removeItem('boldviz_admin_lockout_until');
                    setLoginError('');
                }
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setLockoutRemaining(0);
        }
    }, [lockoutUntil]);

    const clearLeads = async () => {
        if (window.confirm("Are you sure you want to delete ALL leads? This cannot be undone.")) {
            alert("For security, batch deleting is disabled in real-time mode. Please delete leads individually.");
        }
    };

    const deleteLead = async (idToDelete) => {
        if (window.confirm("Are you sure you want to delete this specific lead?")) {
            try {
                await fetch(`${API_URL}/leads/${idToDelete}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token')}` }
                });
            } catch (error) {
                console.error("Error deleting lead:", error);
                alert("Failed to delete lead. Check console.");
            }
        }
    };

    const formTypes = ['All', ...new Set(leads.map(lead => lead.formType))];

    const filteredLeads = filter === 'All' ? leads : leads.filter(lead => lead.formType === filter);

   // ---- CMS METHODS: SERVICES ----
    const handleAddService = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_URL}/services`, {
                 method: 'POST',
                 headers: { 
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                 },
                 body: JSON.stringify(newService)
            });
            setNewService({ title: '', desc: '', bestFor: '' });
        } catch (error) {
            console.error("Error adding service:", error);
            alert("Failed to add service.");
        }
    };

    const handleDeleteService = async (idToDelete) => {
        if (window.confirm("Delete this custom service?")) {
            try {
                await fetch(`${API_URL}/services/${idToDelete}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token')}` }
                });
            } catch (error) {
                console.error("Error deleting service:", error);
            }
        }
    };

    // ---- CMS METHODS: CAREERS ----
    const handleAddCareer = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${API_URL}/careers`, {
                 method: 'POST',
                 headers: { 
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
                 },
                 body: JSON.stringify(newCareer)
            });
            setNewCareer({ title: '', type: 'Internship', loc: '', desc: '' });
        } catch (error) {
             console.error("Error adding career:", error);
             alert("Failed to add career.");
        }
    };

    const handleDeleteCareer = async (idToDelete) => {
        if (window.confirm("Delete this custom career role?")) {
            try {
                await fetch(`${API_URL}/careers/${idToDelete}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('admin_token')}` }
                });
            } catch (error) {
                console.error("Error deleting career:", error);
            }
        }
    };

    // ---- AUTH LOGIC ----
    const handleLogin = async (e) => {
        e.preventDefault();

        if (lockoutRemaining > 0) return;

        try {
            const res = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginForm)
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('admin_token', data.token);
                setIsAuthenticated(true);
                setLoginError('');
                setFailedAttempts(0);
                localStorage.removeItem('boldviz_admin_failed_attempts');
                localStorage.removeItem('boldviz_admin_lockout_until');
            } else {
                throw new Error(data.message || 'Invalid credentials');
            }

        } catch (error) {
            console.error(error);
            const newAttempts = failedAttempts + 1;
            setFailedAttempts(newAttempts);
            localStorage.setItem('boldviz_admin_failed_attempts', newAttempts.toString());

            if (newAttempts >= 3) {
                const unlockTime = Date.now() + 5 * 60 * 1000;
                setLockoutUntil(unlockTime);
                localStorage.setItem('boldviz_admin_lockout_until', unlockTime.toString());
                setLoginError('Too many failed attempts. Locked out for 5 minutes.');
            } else {
                setLoginError(`Invalid credentials. Access Denied. (${3 - newAttempts} attempts remaining)`);
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        if (socket) socket.disconnect();
    };

    // Format remaining time as MM:SS
    const formatTime = (ms) => {
        const totalSeconds = Math.ceil(ms / 1000);
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    if (isAuthLoading) {
         return (
             <div className="min-h-screen bg-dark-bg text-white flex items-center justify-center font-outfit">
                 <div className="animate-pulse flex flex-col items-center">
                    <ShieldAlert className="w-12 h-12 text-neon-blue mb-4 opacity-50" />
                    <p className="text-gray-400 font-orbitron uppercase tracking-widest text-sm">Verifying Session...</p>
                 </div>
             </div>
         );
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-dark-bg text-white flex items-center justify-center p-4 relative font-outfit">
                {/* Background Effects */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card w-full max-w-md p-8 rounded-2xl relative z-10 border border-neon-blue/20 shadow-[0_0_40px_rgba(0,243,255,0.1)]"
                >
                    <div className="text-center mb-8">
                        <ShieldAlert className="w-16 h-16 text-neon-blue mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
                        <h2 className="text-3xl font-orbitron font-bold uppercase tracking-wider mb-2">
                            Restricted <span className="text-neon-blue">Access</span>
                        </h2>
                        <p className="text-gray-400 text-sm">Please authenticate to access the Super Admin Dashboard.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {lockoutRemaining > 0 ? (
                            <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm text-center rounded-xl font-medium">
                                Locked out. Try again in {formatTime(lockoutRemaining)}
                            </div>
                        ) : loginError ? (
                            <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm text-center rounded-xl font-medium animate-pulse">
                                {loginError}
                            </div>
                        ) : null}

                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Admin Username</label>
                            <input
                                type="text"
                                required
                                value={loginForm.username}
                                onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
                                className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all"
                                placeholder="BoldVizByte"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={loginForm.password}
                                    onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                                    className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all font-mono"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neon-blue transition-colors cursor-target focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={lockoutRemaining > 0}
                            className={`w-full py-4 mt-4 font-bold font-orbitron uppercase tracking-widest transition-all duration-300 rounded-xl ${lockoutRemaining > 0
                                    ? 'bg-gray-800 text-gray-500 border border-gray-700 cursor-not-allowed'
                                    : 'bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)] cursor-target'
                                }`}
                        >
                            {lockoutRemaining > 0 ? 'Wait to Try Again' : 'Secure Login'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-12 pb-12 px-4 sm:px-6 lg:px-8 relative font-outfit">

            {/* Background Effects */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
                <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Global Heading */}
                <div className="flex flex-col items-center mb-10 gap-2 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold uppercase tracking-wide flex flex-col items-center justify-center gap-3"
                    >
                        <div className="flex font-orbitron drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className="text-white"
                            >
                                Bold
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                                className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] mx-[2px]"
                            >
                                Viz
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="text-white"
                            >
                                Byte
                            </motion.span>
                        </div>
                        <span className="px-5 py-1.5 bg-neon-pink/10 text-neon-pink text-xl md:text-2xl rounded-xl font-orbitron border border-neon-pink/30 drop-shadow-[0_0_15px_rgba(255,42,133,0.5)]">Super Admin</span>
                    </motion.h1>
                    <p className="text-gray-400">Manage all website leads, enquiries, and applications.</p>
                </div>

                {/* Top Controls Row */}
                <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center mb-8 gap-4">
                    {/* Tabs (Left) */}
                    <div className="glass-card p-1.5 rounded-full flex border border-dark-border gap-1 overflow-x-auto w-full lg:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <button
                            onClick={() => setActiveTab('leads')}
                            className={`px-4 md:px-6 py-2.5 rounded-full font-bold font-orbitron text-xs md:text-sm transition-all whitespace-nowrap flex-1 lg:flex-none ${activeTab === 'leads' ? 'bg-neon-blue text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            LEADS
                        </button>
                        <button
                            onClick={() => setActiveTab('services')}
                            className={`px-4 md:px-6 py-2.5 rounded-full font-bold font-orbitron text-xs md:text-sm transition-all whitespace-nowrap flex-1 lg:flex-none ${activeTab === 'services' ? 'bg-neon-blue text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            SERVICES 
                        </button>
                        <button
                            onClick={() => setActiveTab('careers')}
                            className={`px-4 md:px-6 py-2.5 rounded-full font-bold font-orbitron text-xs md:text-sm transition-all whitespace-nowrap flex-1 lg:flex-none ${activeTab === 'careers' ? 'bg-neon-blue text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            CAREERS 
                        </button>
                    </div>

                    {/* Total Leads & Logout (Right) */}
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="glass-card px-4 md:px-6 py-3 md:py-4 rounded-xl neon-border flex-1 lg:flex-none inline-flex items-center justify-center min-w-[120px] shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                            <div className="text-center w-full">
                                <p className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1 md:mb-2">Total Leads</p>
                                <p className="text-3xl md:text-4xl font-bold text-neon-blue leading-none">{leads.length}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="glass-card p-3 md:p-4 rounded-xl hover:bg-red-500/10 hover:border-red-500/50 text-gray-400 hover:text-red-400 transition-all border border-dark-border group flex-shrink-0 flex items-center justify-center h-full"
                            title="Log Out"
                        >
                            <LogOut size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {activeTab === 'leads' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>

                        {/* Controls */}
                        <div className="glass-card rounded-xl p-3 md:p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                {formTypes.map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setFilter(type)}
                                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex-1 sm:flex-none text-center ${filter === type
                                            ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                                            : 'bg-dark-elem border border-dark-border text-gray-300 hover:text-white hover:border-gray-500'
                                            }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={clearLeads}
                                className="w-full sm:w-auto px-4 py-2 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 text-xs md:text-sm font-semibold opacity-50 cursor-not-allowed hidden sm:flex"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                Batch Delete Disabled
                            </button>
                        </div>

                        {/* Data Table */}
                        <div className="glass-card rounded-xl overflow-hidden border border-dark-border shadow-[0_4px_30px_rgba(0,0,0,0.1)] mb-12">
                            <div className="overflow-x-auto">
                                <div className="block lg:hidden">
                                        <AnimatePresence>
                                            {filteredLeads.length === 0 ? (
                                                <div className="px-6 py-12 text-center text-gray-500 bg-dark-elem/20">
                                                    No leads found.
                                                </div>
                                            ) : (
                                                filteredLeads.map((lead, idx) => (
                                                    <motion.div
                                                        key={lead.id || idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.95 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="border-b border-dark-border/50 p-4 space-y-3 bg-dark-elem/10 hover:bg-dark-elem/30 transition-colors"
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h3 className="font-bold text-white text-lg">{lead.name}</h3>
                                                                <span className={`inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-semibold ${lead.formType === 'Job Application' ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' :
                                                                    lead.formType === 'Service Application' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                                                                        lead.formType === 'ChatBot Lead' ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30' :
                                                                            'bg-gray-700 text-gray-300'
                                                                    }`}>
                                                                    {lead.formType}
                                                                </span>
                                                            </div>
                                                            <div className="text-right">
                                                                <div className="text-xs text-gray-400">{new Date(lead.timestamp).toLocaleDateString()}</div>
                                                                <div className="text-[10px] text-gray-500">{new Date(lead.timestamp).toLocaleTimeString()}</div>
                                                            </div>
                                                        </div>

                                                        <div className="text-sm">
                                                            <div className="text-gray-300 break-all">{lead.email}</div>
                                                            <div className="text-neon-blue font-medium">{lead.phone}</div>
                                                        </div>

                                                        <div className="text-xs text-gray-400 bg-dark-bg/50 p-2 rounded-lg border border-white/5">
                                                            <div className="font-semibold text-gray-300 truncate">{lead.serviceOrRole}</div>
                                                            <div className="truncate opacity-75 mt-0.5">{lead.message || 'No additional message'}</div>
                                                        </div>

                                                        <div className="flex gap-2 pt-2">
                                                            <button
                                                                onClick={() => setSelectedLead(lead)}
                                                                className="flex-1 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black rounded-lg transition-all text-sm font-semibold cursor-target flex items-center justify-center gap-2"
                                                            >
                                                                <Eye size={16} /> View
                                                            </button>
                                                            <button
                                                                onClick={() => deleteLead(lead.id)}
                                                                className="flex-none px-4 py-2 bg-red-500/10 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all text-sm font-semibold cursor-target flex items-center justify-center"
                                                                title="Delete"
                                                            >
                                                                <Trash2 size={16} />
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ))
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <table className="hidden lg:table w-full text-left border-collapse min-w-[800px]">
                                        <thead>
                                            <tr className="bg-dark-elem border-b border-dark-border text-xs uppercase tracking-wider text-gray-400">
                                                <th className="px-6 py-4 font-semibold">Date</th>
                                                <th className="px-6 py-4 font-semibold">Type</th>
                                                <th className="px-6 py-4 font-semibold">Name</th>
                                                <th className="px-6 py-4 font-semibold">Contact</th>
                                                <th className="px-6 py-4 font-semibold">Details</th>
                                                <th className="px-6 py-4 font-semibold text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <AnimatePresence>
                                                {filteredLeads.length === 0 ? (
                                                    <motion.tr
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                    >
                                                        <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                                                            No leads found.
                                                        </td>
                                                    </motion.tr>
                                                ) : (
                                                    filteredLeads.map((lead, idx) => (
                                                        <motion.tr
                                                            key={lead.id || idx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, x: -10 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="border-b border-dark-border/50 hover:bg-dark-elem/50 transition-colors"
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                                {new Date(lead.timestamp).toLocaleDateString()}<br />
                                                                <span className="text-xs opacity-50">{new Date(lead.timestamp).toLocaleTimeString()}</span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span className={`px-2 py-1 rounded-md text-xs font-semibold ${lead.formType === 'Job Application' ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' :
                                                                    lead.formType === 'Service Application' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                                                                        lead.formType === 'ChatBot Lead' ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30' :
                                                                            'bg-gray-700 text-gray-300'
                                                                    }`}>
                                                                    {lead.formType}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-white">
                                                                {lead.name}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                                                <div>{lead.email}</div>
                                                                <div className="text-neon-blue font-medium">{lead.phone}</div>
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-400 max-w-[200px]">
                                                                <div className="truncate font-semibold text-gray-300">{lead.serviceOrRole}</div>
                                                                <div className="truncate text-xs">{lead.message || 'No additional message'}</div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                                <div className="flex justify-center gap-2">
                                                                    <button
                                                                        onClick={() => setSelectedLead(lead)}
                                                                        className="px-4 py-2 bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black rounded-lg transition-all text-sm font-semibold shadow-[0_0_10px_rgba(0,243,255,0.2)] cursor-target"
                                                                    >
                                                                        View
                                                                    </button>
                                                                    <button
                                                                        onClick={() => deleteLead(lead.id)}
                                                                        className="px-4 py-2 bg-red-500/10 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-all text-sm font-semibold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-target"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </motion.tr>
                                                    ))
                                                )}
                                            </AnimatePresence>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'services' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">

                        {/* Add Form */}
                        <div className="glass-card p-6 md:p-8 rounded-xl border border-dark-border">
                            <h3 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-2"><Plus className="text-neon-blue" size={20} /> Add New Service</h3>
                            <form onSubmit={handleAddService} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Service Title <span className="text-neon-blue">*</span></label>
                                    <input required type="text" value={newService.title} onChange={e => setNewService({ ...newService, title: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-colors" placeholder="e.g. 3D Animation" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Best For (Target Audience) <span className="text-neon-blue">*</span></label>
                                    <input required type="text" value={newService.bestFor} onChange={e => setNewService({ ...newService, bestFor: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-colors" placeholder="e.g. Brands, YouTubers" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Description <span className="text-neon-blue">*</span></label>
                                    <textarea required value={newService.desc} onChange={e => setNewService({ ...newService, desc: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-blue transition-colors resize-none" rows="3" placeholder="Describe the service..."></textarea>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <button type="submit" className="px-8 py-3 bg-neon-blue text-black font-bold font-orbitron rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center gap-2">Add Service <Plus size={18} /></button>
                                </div>
                            </form>
                        </div>

                        {/* List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {customServices.length === 0 ? (
                                <p className="text-gray-500 italic col-span-full text-center py-10 bg-dark-elem/20 rounded-xl border border-dark-border border-dashed">No custom services added yet. Add one above.</p>
                            ) : (
                                customServices.map(service => (
                                    <div key={service.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative group hover:border-neon-blue/50 transition-colors">
                                        <button onClick={() => handleDeleteService(service.id)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-colors bg-dark-bg p-2 rounded-full border border-dark-border opacity-0 group-hover:opacity-100 shadow-md view-details-btn"><Trash2 size={16} /></button>
                                        <h4 className="text-xl font-orbitron font-bold text-white mb-3 pr-10">{service.title}</h4>
                                        <div className="text-xs text-neon-blue mb-4 inline-block px-3 py-1 bg-neon-blue/10 rounded-full border border-neon-blue/20 font-semibold uppercase tracking-wider">Best for: {service.bestFor}</div>
                                        <p className="text-sm text-gray-400 line-clamp-4 leading-relaxed">{service.desc}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'careers' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8">

                        {/* Add Form */}
                        <div className="glass-card p-6 md:p-8 rounded-xl border border-dark-border">
                            <h3 className="text-xl font-orbitron font-bold mb-6 flex items-center gap-2"><Plus className="text-neon-green" size={20} /> Add New Role</h3>
                            <form onSubmit={handleAddCareer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Role Title <span className="text-neon-green">*</span></label>
                                    <input required type="text" value={newCareer.title} onChange={e => setNewCareer({ ...newCareer, title: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-green transition-colors" placeholder="e.g. UI/UX Designer" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Job Type <span className="text-neon-green">*</span></label>
                                    <select required value={newCareer.type} onChange={e => setNewCareer({ ...newCareer, type: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-green transition-colors appearance-none cursor-pointer">
                                        <option value="Internship" className="bg-dark-elem">Internship</option>
                                        <option value="Full-Time" className="bg-dark-elem">Full-Time</option>
                                        <option value="Part-Time" className="bg-dark-elem">Part-Time</option>
                                        <option value="Contract" className="bg-dark-elem">Contract</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location <span className="text-neon-green">*</span></label>
                                    <input required type="text" value={newCareer.loc} onChange={e => setNewCareer({ ...newCareer, loc: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-green transition-colors" placeholder="e.g. Remote / Onsite" />
                                </div>
                                <div className="space-y-2 md:col-span-3">
                                    <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Description <span className="text-neon-green">*</span></label>
                                    <textarea required value={newCareer.desc} onChange={e => setNewCareer({ ...newCareer, desc: e.target.value })} className="w-full bg-dark-bg/80 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-neon-green transition-colors resize-none" rows="3" placeholder="Describe the role and responsibilities..."></textarea>
                                </div>
                                <div className="md:col-span-3 flex justify-end">
                                    <button type="submit" className="px-8 py-3 bg-neon-green text-black font-bold font-orbitron rounded-xl hover:shadow-[0_0_20px_rgba(0,255,100,0.4)] transition-all flex items-center gap-2">Add Career <Plus size={18} /></button>
                                </div>
                            </form>
                        </div>

                        {/* List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {customCareers.length === 0 ? (
                                <p className="text-gray-500 italic col-span-full text-center py-10 bg-dark-elem/20 rounded-xl border border-dark-border border-dashed">No custom roles added yet. Add one above.</p>
                            ) : (
                                customCareers.map(career => (
                                    <div key={career.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative group hover:border-neon-green/50 transition-colors">
                                        <button onClick={() => handleDeleteCareer(career.id)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-colors bg-dark-bg p-2 rounded-full border border-dark-border opacity-0 group-hover:opacity-100 shadow-md view-details-btn"><Trash2 size={16} /></button>
                                        <div className="flex gap-2 mb-4 pr-10">
                                            <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-full uppercase tracking-wider">{career.type}</span>
                                            <span className="px-3 py-1 bg-white/10 text-gray-300 border border-white/5 text-xs font-bold rounded-full uppercase tracking-wider">{career.loc}</span>
                                        </div>
                                        <h4 className="text-xl font-orbitron font-bold text-white mb-3">{career.title}</h4>
                                        <p className="text-sm text-gray-400 line-clamp-4 leading-relaxed">{career.desc}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Lead Detail Modal Overlay */}
                <AnimatePresence>
                    {selectedLead && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedLead(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                            ></motion.div>

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 rounded-2xl border border-dark-border shadow-[0_0_40px_rgba(0,243,255,0.15)] flex flex-col cursor-target"
                            >
                                <div className="sticky top-0 bg-gradient-to-r from-neon-blue/20 to-dark-card/95 backdrop-blur-xl p-6 border-b border-neon-blue/30 flex justify-between items-center z-10 rounded-t-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-neon-blue rounded-xl text-black shadow-[0_0_15px_rgba(0,243,255,0.6)]">
                                            <User size={28} />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-orbitron font-bold uppercase tracking-wider text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                                                Client <span className="text-neon-blue">Details</span>
                                            </h2>
                                            <p className="text-xs text-neon-blue/80 font-bold tracking-widest uppercase mt-1">Application Overview</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedLead(null)}
                                        className="text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 bg-dark-elem rounded-full p-2 transition-all cursor-target border border-transparent hover:border-red-500/50"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1 shadow-sm">Form Source</p>
                                        <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue border border-neon-blue/20 rounded font-bold uppercase tracking-wider text-sm shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                                            {selectedLead.formType}
                                        </span>
                                    </div>

                                    {/* Dynamic Fields Grid */}
                                    {selectedLead.details && Object.keys(selectedLead.details).length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {Object.entries(selectedLead.details).map(([key, value]) => {
                                                if (!value) return null; // skip empty
                                                // Format Key: "fullName" -> "Full Name"
                                                const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                                                return (
                                                    <div key={key} className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl hover:border-neon-blue/50 transition-colors">
                                                        <p className="text-[10px] md:text-xs text-neon-blue uppercase tracking-widest mb-1 font-bold">{formattedKey}</p>
                                                        <p className="text-gray-200 text-sm whitespace-pre-wrap">{value}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        // Legacy Fallback for older leads
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl">
                                                    <p className="text-xs text-neon-blue uppercase tracking-widest mb-1 font-semibold">Full Name</p>
                                                    <p className="text-lg text-white">{selectedLead.name}</p>
                                                </div>
                                                <div className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl">
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Email Address</p>
                                                    <a href={`mailto:${selectedLead.email}`} className="text-white hover:text-neon-blue transition-colors break-all">{selectedLead.email}</a>
                                                </div>
                                                <div className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl">
                                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Phone Number</p>
                                                    <a href={`tel:${selectedLead.phone}`} className="text-white hover:text-neon-blue transition-colors">{selectedLead.phone}</a>
                                                </div>
                                            </div>
                                            <div className="bg-dark-elem/50 border border-dark-border p-4 rounded-xl">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Requested</p>
                                                <p className="text-white font-medium">{selectedLead.serviceOrRole}</p>
                                            </div>
                                            <div className="bg-neon-blue/5 border border-neon-blue/20 p-5 rounded-xl">
                                                <p className="text-xs text-neon-blue uppercase tracking-widest mb-2 font-semibold">Message</p>
                                                <p className="text-gray-200 whitespace-pre-wrap leading-relaxed text-sm">{selectedLead.message}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Attachment Section */}
                                    {selectedLead.fileName && (
                                        <div className="bg-neon-purple/5 border border-neon-purple/20 p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-xs text-neon-purple uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                                                    <FileText className="w-4 h-4" />
                                                    Attached Document
                                                </p>
                                                <p className="text-gray-200 font-medium truncate max-w-full">{selectedLead.fileName}</p>
                                            </div>
                                            {selectedLead.fileData && (
                                                <a
                                                    href={`data:${selectedLead.mimeType || 'application/pdf'};base64,${selectedLead.fileData}`}
                                                    download={selectedLead.fileName}
                                                    className="px-6 py-3 bg-neon-purple/20 border border-neon-purple/50 text-white rounded-lg hover:bg-neon-purple transition-all font-bold font-orbitron text-sm flex items-center gap-2 shrink-0 cursor-target w-full sm:w-auto justify-center"
                                                >
                                                    <Download size={16} /> DOWNLOAD FILE
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    <div className="pt-4 border-t border-dark-border text-xs text-gray-500 flex justify-between">
                                        <span>Submitted: {new Date(selectedLead.timestamp).toLocaleString()}</span>
                                        <span className="truncate max-w-[200px]" title={selectedLead.pageUrl}>
                                            Source URL: {selectedLead.pageUrl}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default AdminDashboard;
