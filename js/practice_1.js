const fs = require("fs");

// SYNCHRONOUS API :-

// fs.writeFileSync("read.txt", "Hii I'm Darshan and How are you?")         // create file
// const read = fs.readFileSync("read.txt")                                 // read file
// console.log(read.toString())
// fs.appendFileSync("greeting.txt", "Good Night")                          // update file
// fs.renameSync("read.txt", "greeting.txt")                                // rename file
// fs.unlinkSync("greeting.txt")                                            // delete file



// ASYNCHRONOUS API :-

// fs.writeFile("read2.txt", "File is created in your js folder", (err) => {
//     console.log("task completed !!")
//     console.log(err)
// });

// fs.readFile("read2.txt", "utf-8", (err, data) => {
//     console.log(data);
//     console.log(err);
// });

// fs.appendFile("read2.txt", "Your data gets updated!!", (err) => {
//     console.log("task completed!!");
//     console.log(err);
// });

// fs.rename("read2.txt", "greeting.txt", (err) => {
//     console.log("task compleated!!");
//     // console.log(err);
// });

// fs.unlink("greeting.txt", (err) => {
//     console.log("task completed!!");
//     console.log(err);
// });