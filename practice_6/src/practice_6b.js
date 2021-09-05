// const express = require("express");
// const app = express();

// app.set("view engine", "hbs");

// app.get("/", (req, res) => {
//     res.render("index", {
//         Greeting: "Good morning"
//     });
// })

// app.listen(80, () => {
//     console.log("You are Live")
// })

// IF WE WANT TO CHANGE NAME OF VIEWS FOLDER => to templates

const express = require("express");
const path = require("path")
const app = express();

console.log(path.join(__dirname, "./templates"))
const templatesPath = path.join(__dirname, "./templates/views")

app.set("view engine", "hbs");
app.set("views", templatesPath)

app.get("/", (req, res) => {
    res.render("index", {
        Greeting: "Good morning"
    });
})

app.listen(80, () => {
    console.log("You are Live")
})