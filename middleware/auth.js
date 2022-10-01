module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/signup");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    },
    ensureFeedback: function (req, res, next) {
      console.log("ensureFeedback")
      if (req.isAuthenticated()) {
        console.log("is authenticated")
        return next();
      } else if(!req.isAuthenticated()) {
        // create Guest, then 
        console.log("not authenticated")
        return next();
      } else {
        res.redirect("/signup");
      }
    },
  };
  