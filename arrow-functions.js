var inputs = process.argv.slice(2);

var result = inputs.map((string)=>string[0]).reduce((prev, cur, index, arr)=>prev+cur);

console.log(`[${inputs}] becomes "${result}"`);