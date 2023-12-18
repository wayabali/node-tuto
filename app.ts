const _ = require('lodash');

const items : any = [1,[2 , [3 , [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);