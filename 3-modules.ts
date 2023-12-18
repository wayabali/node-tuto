const names = require('./4-names');
console.log(names);
const sayyHi = require('./5-tools');
const data = require('./6-Alternative-flavor');
require('./7-mind-grenade');

sayyHi('susan');
console.log(data.singlePerson);
sayyHi(names.john);
sayyHi(names.ryad);