import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Routes
import authRoutes from './routes/auth.js';
import leadRoutes from './routes/leads.js';
import serviceRoutes from './routes/services.js';
import careerRoutes from './routes/careers.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);

// Enable CORS for frontend
const io = new Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
        methods: ["GET", "POST", "DELETE"]
    }
});

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json({ limit: '50mb' }));

// Security Headers (Fixes Chrome DevTools CSP error)
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; connect-src 'self' http://localhost:5173 https://nfpfzixjeaqlzhgwezuh.supabase.co;"
    );
    next();
});

// Handle Chrome Devtools specific request to prevent 404 console errors
app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
    res.status(404).json({ message: "Not required for this project" });
});

// WebSocket Connection Logging
io.on('connection', (socket) => {
    console.log(`🔌 Admin dashboard connected: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`🔌 Admin dashboard disconnected: ${socket.id}`);
    });
});

// Root Route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Health check Root Route
app.get('/health', (req, res) => {
    res.send("Server is running");
});

// API Root Route
app.get('/api', (req, res) => {
    res.json({ message: "BoldVizByte API is running" });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes(io));
app.use('/api/services', serviceRoutes(io));
app.use('/api/careers', careerRoutes(io));

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
