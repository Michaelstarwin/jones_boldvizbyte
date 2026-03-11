import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Static Admin Credentials for testing (in prod, use DB mapping)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@boldvizbyte.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('BoldVizByte@2025', 10);
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_jwt_key_that_should_be_in_env';

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email !== ADMIN_EMAIL) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create JWT
        const token = jwt.sign(
            { id: 'admin1', email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, user: { email } });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Middleware to verify JWT
export const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default router;
