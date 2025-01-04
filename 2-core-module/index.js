const fs = require('fs');
console.log("dir",__dirname); // dir D:\leaning\nodev2\code-step-by-step-v2\2-core-module

console.log("fileName =>",__filename); 
// fileName => D:\leaning\nodev2\code-step-by-step-v2\2-core-module\index.js

fs.writeFileSync("code.txt","some code")

// Interview Question

/* If interviewer ask is it possible to import only file not whole system 
yes it is possibel

const fs = require('fs').writeFileSync;  // imported only filesystem

do we need variable name fs or filename not 

const gs = require('fs').writeFileSync; // Working
 */