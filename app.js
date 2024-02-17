const http = require("http")

const server = http.createServer((req, res) => {
    res.write("Hello world")
    res.end()
})
console.log("Git Test")
server.listen(4000)