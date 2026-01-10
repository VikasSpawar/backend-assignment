const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Developer Assessment API',
      version: '1.0.0',
      description: 'REST API with JWT Auth + Task CRUD for internship assessment'
    },
    servers: [{
      url: 'http://localhost:5000',
      description: 'Development server'
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js']
};

module.exports = swaggerJsdoc(options);
