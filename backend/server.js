const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 3000;

// connect to db

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello');
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))


app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));