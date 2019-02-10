var http = require('http')
    ,app = require('./config/express')
    ,ip = '142.93.204.36';

http.createServer(app).listen(3000, ip, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

