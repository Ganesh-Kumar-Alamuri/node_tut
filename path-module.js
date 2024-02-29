const path = require('path')

// system seperator

console.log(path.sep);

// joins arguments by sep
console.log(path.join('/a','/b','/c'));
console.log(path.join('/a','/b','c'));
console.log(path.join('/a','b','c'));
console.log(path.join('a','b','c'));

// gets absolute path, execute right to left and treats the right most as base dir
console.log(path.resolve('/a','/b','/c'));
console.log(path.resolve('/a','/b','c'));
console.log(path.resolve('/a','b','c'));
console.log(path.resolve('a','b','c'));
console.log(path.resolve('a','/b','c'));
