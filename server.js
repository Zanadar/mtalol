var HAPI = require('hapi')
var parseString = require('xml2js').parseString
var request = require('request')
var fs = require('fs')
var es = require('event-stream')
var concat = require('concat-stream')
var xmlStream = require('xml-stream')

// request('http://web.mta.info/status/serviceStatus.txt')
//   .pipe(es.replace('&lt;', '<'))
//   .pipe(es.replace('&gt;', '>'))
//   .pipe(es.replace('&amp;nbsp;', ' '))
//   .pipe(fs.createWriteStream('response.txt'))

function processDocument (item) {
  console.log(item)
}

var myFile = fs.createReadStream('./response.txt')
var xml = new xmlStream(myFile, 'utf8');

// Process each type of document
xml.on('error', function(err) {
xml.on('updateElement: timestamp', processDocument);
  console.log(err)
})
xml.on('updateElement: line', processDocument)


// parseString(xml, function(err, result) {
//   if (err) throw err;
//   console.log(JSON.stringify(result))
// })
