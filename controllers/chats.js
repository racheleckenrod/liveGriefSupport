module.exports = {
    getLobby: (req, res) => {
        console.log("chat test")
      res.render("lobby.ejs");
    },
    getRoom: (req, res) => {
      res.render("chatRoom.ejs");
    },
  };
  