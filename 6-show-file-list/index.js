const fs =  require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"files");
const chalk = require('chalk');
console.log(chalk.green('This is green!'));

console.log('dirPath',dirPath) // dirPath D:\leaning\nodev2\code-step-by-step-v2\6-show-file-list

// for (let i= 0; i<5; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+ ".txt", "a simple text file")
// }
// https://youtu.be/OfLCRkxFPCc?list=PL8p2I9GklV456iofeMKReMTvWLr7Ki9At  
console.log(chalk.blue('Hello Geek!'));
 
// Printing the text in red color
console.log(chalk.red('This is an Error! '));
 
fs.readdir(dirPath,(err,files)=>{
    files.forEach((items) =>{
        console.log(items)
    })
})

/* 
// out
hello0.txt
hello1.txt
hello2.txt
hello3.txt
hello4.txt 
    */