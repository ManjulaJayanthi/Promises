const fs = require('fs')
const util = require('util')
const path = require('path')
const dirName = path.join(__dirname, "Files")

const fileArray = ['file1.txt', 'file2.txt', 'file3.txt', 'three.txt']

const writeF = (fileData) => {
    return fs.writeFile(path.join(__dirname, 'result.txt'), fileData, (err, data) => {
        err ? console.log("error occured") : console.log("file saved")
    });
}

//With Promise All
const promiseAllRead = (fileNames) => {
    return Promise.all(fileNames.map(file => {
        return util.promisify(fs.readFile)(path.join(dirName, file), 'utf8');
    }))
}

promiseAllRead(fileArray).then(wholeContent => {
    console.log(wholeContent)
    writeF(wholeContent)
});
