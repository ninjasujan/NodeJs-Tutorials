
const express = require('express');
const path = require('path');
const userRoutes = require('./routes/user');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use('/user', userRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname,'views', '404.html'));
});

app.listen(4000, () => {
    console.log('server running in port 4000');
});
