const { log } = require('console');
const os = require('os')

// user
console.log(os.userInfo());

//uptime

console.log(`The System uptime is ${os.uptime()}`);

const myOS={
    name : os.type(),
    version : os.version(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()

}

console.log(myOS);