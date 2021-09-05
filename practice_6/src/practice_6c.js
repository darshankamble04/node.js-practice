const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();

const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials")

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath)



app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("*", (req, res) => {
    res.send("404 error Page not found")
})

app.listen(8000, () => {
    console.log("You are Live");
})