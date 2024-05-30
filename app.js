// npm - global command, comes with nodeJs
// npm --version    to check the version of the npm installed

// local dependency  - use it only in this particular project
// npm i <package name> or npm install <package name>  

// global dependencies - use it in any project
// npm install -g <package name>  - this command install a package globally


// package.json  - manifest file (stores important info about project/packages)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)




