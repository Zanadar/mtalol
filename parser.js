Transform = require('stream').Transform

var parser = new Transform()
parser._transform = function(data, encoding, done) {
    this.push(data)
    done()
}

function () {

}
