const fs = require('fs')
const util = require('util')
const path = require('path')
const dirName = path.join(__dirname, "Files")

const FILE1 = 'file1.txt'
const FILE2 = 'file2.txt'
const FILE3 = 'file3.txt'

const writeF = (fileData) => {
    return fs.writeFile(path.join(__dirname, 'result.txt'), fileData, (err, data) => {
        err ? console.log("error occured") : console.log("file saved")
    });
}

const readF = (file) => {
    return util.promisify(fs.readFile)(path.join(dirName, file), 'utf8');
}

//Read Files one after one and Write in a file
//Using multiple THEN
readF(FILE1).then(data1 => {
    return readF(FILE2).then(data => { return data1 + ' ' + data })
}).then(data2 => {
    return readF(FILE3).then(data => { return data2 + ' ' + data })
}).then(data3 => {
    writeF(data3)
});