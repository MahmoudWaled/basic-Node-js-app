const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const userRoutes = require('./routes/usersRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
connectDB();

app.use('/api/users', userRoutes);
app.use(logger);

app.get('/', (req , res)=>
    {
        res.send('Home Page');
    });

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
