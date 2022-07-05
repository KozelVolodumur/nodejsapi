const http = require('http');
const app = require('./app.js');
const port = process.env.port || 5000;
const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
