"use strict";
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3001;
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
io.on("connection", function (socket) {
    socket.on("ADD_COMMENT", function (comment) {
        io.emit("ADD_COMMENT", comment);
        console.log(comment);
    });
});
http.listen(port, function () {
    console.log("listening on *:" + port);
});
