import express from 'express';
import { supabase } from '../supabaseClient.js';
import { verifyToken } from './auth.js';

export default function(io) {
    const router = express.Router();

    router.get('/', async (req, res) => {
        try {
            const { data: careers, error } = await supabase
                .from('careers')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            res.json(careers);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    router.post('/', verifyToken, async (req, res) => {
        try {
            const payload = { ...req.body, created_at: new Date().toISOString() };
            const { data: newCareer, error } = await supabase
                .from('careers')
                .insert([payload])
                .select();

            if (error) throw error;
            
            if (newCareer && newCareer.length > 0) {
                io.emit('new_career', newCareer[0]);
                res.status(201).json(newCareer[0]);
            } else {
                 res.status(400).json({ message: "Career creation failed." });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.delete('/:id', verifyToken, async (req, res) => {
        try {
            const { error } = await supabase
                .from('careers')
                .delete()
                .eq('id', req.params.id);

            if (error) throw error;
            
            io.emit('career_deleted', req.params.id);
            res.json({ message: 'Career deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    return router;
}
