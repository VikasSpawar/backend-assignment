

const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes

/**
 * @swagger
 * /:
 *   get:
 *     summary: API Landing Page
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: API information and endpoints
 */
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend Developer Assessment API v1.0',
    status: 'production-ready',
    endpoints: {
      health: '/api/v1/health',
      docs: '/api-docs',
      auth: '/api/v1/auth/register, /api/v1/auth/login',
      tasks: '/api/v1/tasks (JWT required)'
    },
    swagger: 'http://localhost:5000/api-docs',
    github: 'https://github.com/yourusername/backend-assignment'
  });
});


/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health check
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: API is healthy
 */
app.get('/api/v1/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API Healthy',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/v1/auth', require('./routes/v1/auth'));

app.use('/api/v1/tasks', require('./routes/v1/tasks'));

app.get('/api/v1', (req, res) => {
  res.json({ message: 'Backend Assessment API - Auth Ready' });
});

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server: http://localhost:${PORT}`);
      console.log(`🔐 Auth APIs ready: POST /api/v1/auth/register`);
      console.log(`🔐 Auth APIs ready: POST /api/v1/auth/login`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
