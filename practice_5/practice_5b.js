const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // res.send("This is home page");
    res.write("<h1>This is home page</h2>")
    res.write("<h1> page</h2>")
    res.send();
});

app.get("/about", (req, res) => {
    res.send("this is about page")
})

// we can also transfer json data
app.get("/json", (req, res) => {
    // res.send([{
    //     name: "Darshan",
    //     greeting: "Good Morning"
    // }, {
    //     name: "Darshan",
    //     greeting: "Good Morning"
    // }, {
    //     name: "Darshan",
    //     greeting: "Good Morning"
    // }])

    // OR

    res.json([{
        name: "Darshan",
        greeting: "Good Morning"
    }, {
        name: "Darshan",
        greeting: "Good Morning"
    }, {
        name: "Darshan",
        greeting: "Good Morning"
    }])
})

app.listen(80, () => {
    console.log("You are Live ...")
})