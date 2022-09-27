const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const http = require("http");
const io = require("socket.io")(2899, {
  cors: {
  origin: "http://localhost:3333",
  methods: ["GET", "POST"]
}
});
// Testing comments in Production Branch
// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: "http://localhost:2899",
//     methods: ["GET", "POST"]
//   }
// });

// httpServer.listen(3000);
// const formatMessage = require("./utils/messages");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const chatRoutes = require("./routes/chat")


// From Heroku:
// const { Server } = require('ws');

const PORT = process.env.PORT ;
// const INDEX = '/index.html';

// const server = express()  
// we already have const app = express(), so will try to use that instead of creating another variable set to the same thing. see github.com/heroku-examples/node-websockets/blob/main/server.js

// app.use((req, res) => res.sendFile('chat/room.ejs', {root: __dirname }))

// create a Socket.io server
// const server = http.createServer(app);
// const io = socketio(server);

// handle connections
io.on('connection', socket => {
  console.log('Client connected', new Date().toTimeString());
  socket.emit('timeClock', "It's about time");
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// broadcast updates
setInterval(() => io.emit('time', "about time"), 1000)
setInterval(() => io.emit('timeData', new Date().toTimeString()), 1000);

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

app.use(cors())

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static(path.join(__dirname, "public")));
// server.use(express.static("public"))

app.set('socketio', io);

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);
app.use("/chat", chatRoutes);
app.get("/chat",(req, res) => 
render('lobby.ejs', {  }))


// Imported from chatChordApp:

const botName = "Grief Support Bot";

// (async () => {
//   pubClient = createClient({ url: "redis://127.0.0.1:6379" });
//   await pubClient.connect();
//   subClient = pubClient.duplicate();
//   io.adapter(createAdapter(pubClient, subClient));
// })();

// // Run when client connects
io.on("connection", (socket) => {
  // console.log('New WS Connection');
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

//     // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to Live Grief Support!"));

//     // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",  formatMessage(botName,`${user.username} has joined the chat`)
//         formatMessage(botName, `${user.username} has joined the chat`)
      );

//     // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

//   // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
       
    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

//   // Runs when client disconnects
  socket.on("disconnect", () => {
    // io.emit("message",  formatMessage(botName,'a user has left the chat'))
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

//       // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`);
});
