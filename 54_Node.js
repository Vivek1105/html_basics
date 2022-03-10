// Modules

const fs = require("fs");
let x = fs.readFileSync("viv","utf-8");
x = x.replace("which","thing")

console.log("content of the file is")
console.log(x);


console.log("creating a file")
fs.writeFileSync("viv.txt",x)