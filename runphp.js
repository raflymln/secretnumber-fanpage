class ExecPHP {
    constructor() {
        this.phpPath = 'D:\\xampp\\php\\php.exe';
        this.phpFolder = __dirname;
    }

    parseFile(fileName, callback) {
        var realFileName = this.phpFolder + fileName;

        console.log('parsing file: ' + realFileName);

        var exec = require('child_process').exec;
        var cmd = this.phpPath + ' ' + realFileName;

        exec(cmd, function(error, stdout, stderr) {
            callback(stdout);
        });
    }
}

var express = require('express');
var app = express();

var execPHP = new ExecPHP();

app.use('*.php', function(request, response, next) {
    console.log(request.originalUrl)
    execPHP.parseFile(request.originalUrl, function(phpResult) {
        response.write(phpResult);
        response.end();
    });
});

app.listen(3000, function() {
    console.log('Node server listening on port 3000!', __dirname);
});