//Modules

// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only Share minimum)


const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(data);

sayHi('bhupati');
sayHi(john);
sayHi(peter);