import express from 'express';
import { supabase } from '../supabaseClient.js';
import { verifyToken } from './auth.js';

export default function(io) {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const { data: services, error } = await supabase
                .from('services')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            res.json(services);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    router.post('/', verifyToken, async (req, res) => {
        try {
            const payload = { ...req.body, created_at: new Date().toISOString() };
            const { data: newService, error } = await supabase
                .from('services')
                .insert([payload])
                .select();

            if (error) throw error;
            
            if (newService && newService.length > 0) {
                io.emit('new_service', newService[0]);
                res.status(201).json(newService[0]);
            } else {
                 res.status(400).json({ message: "Service creation failed." });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.delete('/:id', verifyToken, async (req, res) => {
        try {
            const { error } = await supabase
                .from('services')
                .delete()
                .eq('id', req.params.id);

            if (error) throw error;
            
            io.emit('service_deleted', req.params.id);
            res.json({ message: 'Service deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
}
