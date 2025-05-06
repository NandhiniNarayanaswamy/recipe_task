const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./recipes-app/backend/config/db');
const recipeRoutes = require('./recipes-app/backend/routes/recipeRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
