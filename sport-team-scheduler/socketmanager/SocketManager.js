module.exports = function(socket){

    socket.on("disconnect", () => {
    console.log("User disconnected");
    });

    socket.on("SEND_MESSAGE", function(data)  {
        socket.emit("RECEIVE_MESSAGE", data);
    });
}

