require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const middlewarelogRequest = require('./middleware/logs');
const userRoutes = require('./routes/userRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const cors = require('cors');

const app = express();

app.use(middlewarelogRequest);
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/log', (req, res) => {
    console.log('Ini adalah pesan log sederhana');
    res.json({ message: 'Pesan log telah ditampilkan di konsol' });
});

app.use('/api/users', userRoutes);
app.use('/booking-calendar', calendarRoutes);

//error handling
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server Running in port ${PORT}`);
})
