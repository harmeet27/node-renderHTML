const http = require('http');
const fs = require('fs');
//const mymodule = require('./mymodule.js');
//const mymodule2 = require('./myModule2.js')

function onequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File Not  Find');
        } else {
            res.write(data);
        }

        res.end();
    });
}

http.createServer(onequest).listen(8000);