const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const http = require("http");
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT;
const PORT2 = process.env.PORT2;
app.use(cors())
const io = require("socket.io")(PORT2, {
  cors: {
  origin: `http://localhost:${process.env.PORT}`,
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

// const PORT = process.env.PORT ;
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


// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();



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

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`);
});
