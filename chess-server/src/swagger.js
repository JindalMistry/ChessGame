import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node.js Swagger API',
      version: '1.0.0',
      description: 'API documentation for Node.js application',
    },
  },
  apis: ['./src/controllers/*'],
};

export default swaggerJSDoc(options);
