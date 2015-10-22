var HAPI = require('hapi')
var parseString = require('xml2js').parseString
var http = require('http')
var fs = require('fs')

var options = {
    host: 'web.mta.info',
    path: '/status/serviceStatus.txt'
}

function writeResponse (chunk) {
    var text = chunk.replace('&lt;', '<').replace('&gt;', '>')
    parseString(text, function(err, result) {
        fs.writeFile('response.txt', result, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        })
    })
}

http.get(options, function(res) {
    console.log("Got response: " + res)
    res.on('data', writeResponse)
   }).on('error', function(e) {
        console.log("Got error: " + e.message);
});
