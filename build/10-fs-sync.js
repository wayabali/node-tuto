"use strict";
const { readFilesync, writeFilesync } = require('fs');
const first1 = readFilesync('./content/test.txt', 'utf8');
const second1 = readFilesync('./content/second.txt', 'utf8');
console.log("starting the task");
writeFilesync('./content/resultFile.txt', `here is the result : ${first1},${second1}`, { flag: 'a' });
console.log("don with the task");
console.log("start new task");
