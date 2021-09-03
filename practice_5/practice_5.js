const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Home page");
})

app.listen(8000, () => {
    console.log("You are Live");
})