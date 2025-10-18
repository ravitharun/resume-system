const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const resumeRoutes = require('./routes/resumeRoutes');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/resume', resumeRoutes);

// Test
app.get('/', (req, res) => res.send('Resume System Backend Running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
