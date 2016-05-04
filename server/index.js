const opener = require('opener');
const app = require('./app');
const port = 8080;

const httpServer = app.listen(port, function () {
    //opener(`http://localhost:${port}`);
});

process.on('SIGTERM', function () {
    httpServer.close(function () {
        process.exit(0);
    });
});
