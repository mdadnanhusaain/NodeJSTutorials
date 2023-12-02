console.log("Hello World from NodeJS");

const adnan = require("./import1");

console.log(`My Name is ${adnan.name}`);

const os = require("os");

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(((os.totalmem()/1024)/1024)/1024);
