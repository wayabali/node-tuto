"use strict";
const { readFile, writeFile } = require('fs');
console.log("starting the task");
readFile('./content/test.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/resultFile.txt', `here is the result ${first},${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with this task");
        });
    });
});
console.log("starting new task");
