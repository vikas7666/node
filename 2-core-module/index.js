const fs = require('fs');
console.log("dir",__dirname); // dir D:\leaning\nodev2\code-step-by-step-v2\2-core-module

console.log("fileName =>",__filename); 
// fileName => D:\leaning\nodev2\code-step-by-step-v2\2-core-module\index.js

fs.writeFileSync("code.txt","some code")

// Interview Question

// If interviewer ask only import write file not whole filesystem then
// yes it is possibel

// const fs = require('fs').writeFileSync;

// kya hame const ke file name fs ke jaise hi require ke fs hona chahiye to nahi 

// const gs = require('fs').writeFileSync; // Working
