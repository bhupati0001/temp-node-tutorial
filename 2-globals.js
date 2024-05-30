// GLOBALS  - NO WINDOW !!!
// __dirname - path to the current directory
// __filename  - current file's name
// require - function to use modules (Common Js)
// process - info about env where the program is being executed
// module - info about current module (file)


console.log('Hey your current directory is: ', __dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
    console.log('Hello! World..')
}, 1000)