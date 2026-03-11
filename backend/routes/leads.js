import express from 'express';
import { supabase } from '../supabaseClient.js';
import { verifyToken } from './auth.js';

export default function(io) {
    const router = express.Router();

    // GET all leads (Protected)
    router.get('/', verifyToken, async (req, res) => {
        try {
            const { data: leads, error } = await supabase
                .from('leads')
                .select('*')
                .order('timestamp', { ascending: false });

            if (error) throw error;
            res.json(leads);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // POST a new lead (Public)
    router.post('/', async (req, res) => {
        try {
            const payload = { ...req.body, timestamp: new Date().toISOString() };
            const { data: newLead, error } = await supabase
                .from('leads')
                .insert([payload])
                .select();

            if (error) throw error;
            
            // Broadcast to all connected Admin clients instantly
            if (newLead && newLead.length > 0) {
                io.emit('new_lead', newLead[0]);
                res.status(201).json(newLead[0]);
            } else {
                res.status(400).json({ message: "Lead creation failed." });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // DELETE a lead (Protected)
    router.delete('/:id', verifyToken, async (req, res) => {
        try {
            const { error } = await supabase
                .from('leads')
                .delete()
                .eq('id', req.params.id);

            if (error) throw error;
            
            // Tell clients to remove
            io.emit('lead_deleted', req.params.id);
            
            res.json({ message: 'Lead deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
}
