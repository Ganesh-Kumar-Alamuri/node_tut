const { readFileSync, writeFileSync} = require('fs')
console.log('Start');
//encoding is optional in sync
const first = readFileSync('./files/first.txt')
const second = readFileSync('./files/second.txt','utf8')

console.log(`First File :\n${first}\nSecond File :\n${second}`);

//writing

writeFileSync(
    './files/result-sync.txt',
    `Result : \n${first}\n${second}`,
    // {
    //     flag:'a' // Appeding
    // }
)
console.log('Done');
console.log('Next');