
// importing module
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminData.routes);
app.use(shopRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'notfound.html'));
});

// creating server unsing http module
app.listen(4000, () => {
    console.log('Server running...');
});



