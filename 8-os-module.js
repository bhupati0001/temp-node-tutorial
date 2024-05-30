//OS MODULE -       BUILT IN MODULE

const os = require('os')

//info about the current user
const user = os.userInfo()

console.log(user)

//methods returns the system uptime in seconds

console.log(`The system Uptime is ${os.uptime()}seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem() / Math.pow(1024, 2),
    freeMem: os.freemem() / Math.pow(1024, 2),
}

console.log(currentOS);