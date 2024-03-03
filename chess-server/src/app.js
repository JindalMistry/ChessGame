import express from 'express';
import mongoose from 'mongoose';
import userController from './controllers/userController.js'; 
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', userController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
