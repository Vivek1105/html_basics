// Synchronous or blocking
// -line by line execution

// asynchronous or non-blocking
// -line by line execution not granted
// -callbacks will fire 

const fs = require("fs");
fs.readFile("viv","utf-8",(err,data)=>{
   console.log(data);
});

console.log("this is a msg")
