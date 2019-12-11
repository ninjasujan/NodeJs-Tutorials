 


const requestHandler = (req, res) => {

    if(req.url === '/') {
        res.statusCode = 302;
    
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
            <head><title>Node-Js server</title></head>
            <body>
                <h2>Some Node-Js Basic</h2>
                <form method="POST" action="/addusers">
                    <input type="text" name="username">
                    <button type="submit">Add users</button>
                </form>
            </body>
            </html>
        `);
        return res.end();
    }
    if(req.url === '/users') {
        res.statusCode = 302;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Node-Js server</title></head>
            <body>
                <h2>List of Users in Home</h2>
                <ul>
                    <li>Ryu Gtayua</li>
                    <li>Mario cart</li>
                </ul>
            </body>
        </html>
        `);
        return res.end();
    }
    if(req.url === '/addusers' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body);
            const user = parseBody.slice('=')[1];
            console.log('new user request', user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

};

module.exports = requestHandler;
