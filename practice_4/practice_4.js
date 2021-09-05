const http = require("http");
const port = 80;

const server = http.createServer((req, res) => {
    res.end("Hii I'am Darshan , Welcome to the server")
});

server.listen(port, "127.0.0.1", () => {
    console.log("You are live ...")
})