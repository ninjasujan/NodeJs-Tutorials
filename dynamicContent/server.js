
// importing module
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('.hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}));

app.set('view engine', '.ejs');
app.set('views', 'views');

app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log('404 error');
    res.status(404).render('404.hbs', {pageTitle: 'page not found'});
});

// creating server unsing http module
app.listen(4000, () => {
    console.log('Server running...');
});



