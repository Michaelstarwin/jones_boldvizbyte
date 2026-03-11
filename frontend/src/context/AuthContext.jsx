import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for saved user in localStorage on mount
        const savedUser = localStorage.getItem('boldvizbyte_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const mockUser = {
                        id: '1',
                        name: 'Demo User',
                        email: email,
                        mobile: '+91 9876543210'
                    };
                    setUser(mockUser);
                    localStorage.setItem('boldvizbyte_user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 1000);
        });
    };

    const signup = async (name, email, password, mobile) => {
        // Mock API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const mockUser = {
                    id: Date.now().toString(),
                    name,
                    email,
                    mobile
                };
                setUser(mockUser);
                localStorage.setItem('boldvizbyte_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('boldvizbyte_user');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
