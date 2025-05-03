require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { initDB } = require('./models');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');



const authMiddleware = require('./middlewares/authMiddleware');
const multer = require('multer');

const app = express();

// Configure Multer
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// CORS Configuration
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS.split(','),
    credentials: true,
    optionsSuccessStatus: 200,
};

// Middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/uploads', express.static(UPLOAD_DIR));

// Routes
app.use('/auth', authRoutes);
app.use('/users' , authMiddleware , userRoutes);
app.use('/events' , authMiddleware , eventRoutes);


// Health Check
app.get('/health', (req, res) => res.status(200).json({ message: 'Server is healthy' }));

// 404 Handling
app.use((req, res, next) => res.status(404).json({ error: 'Route not found' }));

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
initDB()
    .then(() => {
        app.listen(4000, () => console.log('Server running on port 4000'));
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
