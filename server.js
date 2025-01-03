const express = require("express");
const app = express();
const http =  require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 5502;

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});

server.listen(PORT, () => {
    console.log("listenin on 5502");
});