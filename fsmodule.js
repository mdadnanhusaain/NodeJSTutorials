const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(err, data);
});
console.log("Finished reading file 1st time");

const read = fs.readFileSync("file.txt", "utf-8") || "Error";
console.log(read);
console.log("Finished reading file 2nd time");

fs.writeFile("file.txt", "This is the data", () => {
  console.log("1st writing complete");
});

const write = fs.writeFileSync("file.txt", "This is a data2");
console.log("2nd writing complete");
