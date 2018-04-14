const db = require("../models/");

module.exports = function(app, PORT){

    const server = require("http").Server(app);
    const io = (module.exports.io = require("socket.io")(server));

    var channel = "Lobby";
    var connectedUsers = {
      [channel]: {}
    };

    io.on("connection", function(socket) {
        socket.on("JOIN", function(user) {
            socket.room = channel;
            socket.join(socket.room);
            if (user.name) {
                console.log(user);
                connectedUsers[channel][user.id] = user;
                io.to(channel).emit("CONNECTED_USERS", Object.values(connectedUsers[channel]));
                console.log("User joined " + channel + " " + user.name);
            }
        });

        socket.on("LEAVE", (user) => {
            if (connectedUsers[channel][user.id]) {
                delete connectedUsers[channel][user.id];
            }
            io.to(channel).emit("CONNECTED_USERS", Object.values(connectedUsers[channel]));
            socket.leave(channel);
            console.log("User signout " + user.name);
        });

        socket.on("SEND_MESSAGE", function(data) {
            console.log(data);
            db.Message
                .create({ body: data.body, author: data.userId })
                .then(dbModel => {
                    console.log(dbModel);
                })
                .catch(err => console.log(err));
            io.to(channel).emit("RECEIVE_MESSAGE", data);
        });

        socket.on("disconnect", function() {
            console.log("user disconnected from Room");
        });
    })

    //Start the API server
    server.listen(PORT, () => {
        console.log("Connected to port:" + PORT);
    });

}

