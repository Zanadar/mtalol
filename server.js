var HAPI = require('hapi')
var parseString = require('xml2js').parseString
var request = require('request')
var fs = require('fs')
var es = require('es')

var options = {
  host: 'web.mta.info',
  path: '/status/serviceStatus.txt'
}


request('http://web.mta.info')
  .pipe(es.replace('&lt;', '<'))
  .pipe(es.replace('&rt;', '>'))
  .pipe(fs.createWriteStream('response.txt'))

// http.get(, function(res) {
//   res.pipe(writable)
//   res.on('end', function () {
//       console.log("Logged to response.txt")
//   })
//   }).on('error', function(e) {
//       console.log("Got error: " + e.message);
// });

// writable = fs.createWriteStream('response.txt');
