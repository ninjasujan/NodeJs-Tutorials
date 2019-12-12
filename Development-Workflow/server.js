
// importing module
const http = require('http');
const routes = require('./path');

// creating server unsing http module
const server = http.createServer(routes.handler); 

// listening to port 
server.listen(4000, () => {
    console.log('server running on port 4000...');
});