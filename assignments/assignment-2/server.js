
const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
	console.log('Second middleware');
	res.send('<p>/users middleware for handling /users</p>');
});

app.use('/', (req, res, next) => {
	console.log('First middleware');
	res.send('<p>/ middleware for handling root</p>');
});




app.listen(4000, ()=> {
	console.log('server running');
});
