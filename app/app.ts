const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3001;

app.get("/", function(req: any, res: any) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket: any) {
  socket.on("ADD_COMMENT", function(comment: any) {
    io.emit("ADD_COMMENT", comment);
    console.log(comment);
  });
});

http.listen(port, function() {
  console.log("listening on *:" + port);
});
