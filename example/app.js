let fs = require('fs')

let writeStream = fs.createWriteStream(__dirname + '/writeFile.txt')
let readStream = fs.createReadStream(__dirname + '/readFile.txt')

readStream.pipe(writeStream)