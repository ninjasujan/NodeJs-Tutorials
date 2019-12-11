
const fs = require('fs');

const requestHandler = (req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <htmL>
            <head><title>NodeJs Basic</title></head>
            <body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send Message</button>
                </form>
            </body>
            </html>
        `); 
        return res.end();
    }
    if(req.url === '/message' && req.method === 'POST') {
        const body = [];
        let message = null;
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFile('someText.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });   
        });
        require.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head>
                <title>Node Sever..</title>
            </head>
            <body>
                <h2>My First Page..</h2>
            </body>
            </html>
        `);
        res.end();
    }
};

module.exports = {
    handler: requestHandler,
    someText: 'NodeJs module system export'
};


