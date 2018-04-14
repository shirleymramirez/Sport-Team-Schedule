module.exports = function(socket){

    socket.on("SEND_MESSAGE", function(data) {
    console.log(data);
    socket.emit("RECEIVE_MESSAGE", data);
    });

    socket.on("disconnect", () => {
    console.log("User disconnected");
    });
}

