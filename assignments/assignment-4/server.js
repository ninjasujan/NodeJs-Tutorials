const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userData = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));
app.use(userData.routes);


app.use((req, res, next) => {
    res.render('404', {pageTitle: 'Page not avilabel'});
});

app.listen(3000, () => {
    console.log('server running in port 3000');
});


