// // It will display windows entire process description
// console.log(process.argv[2])  // return hello 

const fs = require('fs');

// from args arguments we can pass arguments in command line  

const input = process.argv;
// fs.writeFileSync(input[2],input[3]);

/* This is command line  */
// node .\index.js apple.txt 'This is a file system'


//  node .\index.js add orange.txt 'This is orange file'
if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid input")
}

// How to remove command line
// node .\index.js remove orange.txt