// FS MODULE

const fs = require("fs");

// SYNCHRONOUS API :-

fs.writeFileSync("read.txt", "Hii I'm Darshan and How are you?") // create file
const read = fs.readFileSync("read.txt") // read file
console.log(read.toString())
fs.appendFileSync("greeting.txt", "Good Night") // update file
fs.renameSync("read.txt", "greeting.txt") // rename file
fs.unlinkSync("greeting.txt") // delete file



// ASYNCHRONOUS API :-

fs.writeFile("read2.txt", "File is created in your js folder", (err) => { // create file
    console.log("task completed !!")
    console.log(err)
});

fs.readFile("read2.txt", "utf-8", (err, data) => { // read file
    console.log(data);
    console.log(err);
});

fs.appendFile("read2.txt", "Your data gets updated!!", (err) => { // update file
    console.log("task completed!!");
    console.log(err);
});

fs.rename("read2.txt", "greeting.txt", (err) => { // rename file
    console.log("task compleated!!");
    // console.log(err);
});

fs.unlink("greeting.txt", (err) => { // delete file
    console.log("task completed!!");
    console.log(err);
});


// OS MODULE

const os = require("os");

console.log(os.arch()); // Architecher 64bits 32bits
console.log(os.homedir());
console.log(os.version());
console.log((os.freemem()) / 1024 / 1024 / 1024);
console.log(os.networkInterfaces());
console.log(os.platform());


// PATH MODULE

const path = require("path");

console.log(path.basename("C:\Users\Darshan S\OneDrive\Documents\GitHub\node.js-practice-\js\practice_1.js"));
console.log(path.dirname("C:\Users\Darshan S\OneDrive\Documents\GitHub\node.js-practice-\js\practice_1.js"));
console.log(path.join("C:\Users\Darshan S\OneDrive\Documents\GitHub\node.js-practice-\js\practice_1.js"))
console.log(path.parse("C:\Users\Darshan S\OneDrive\Documents\GitHub\node.js-practice-\js\practice_1.js"));