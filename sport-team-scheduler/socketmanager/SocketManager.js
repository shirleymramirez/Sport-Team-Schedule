const io = require("./../server.js").io;

module.exports = function(socket){

    socket.on("disconnect", () => {
    console.log("User disconnected");
    });

    socket.on("SEND_MESSAGE", function(data)  {
        io.emit("RECEIVE_MESSAGE", data);
    });
}

