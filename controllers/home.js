const Post = require("../models/Post");
const Comment = require("../models/Comment")
const Feedback = require("../models/Feedback");
const Guest = require("../models/Guest");
const { response } = require("express");

module.exports = {
    getIndex: async (req, res) => {
      try {
        const posts = await Post.find().populate('user').sort({ likes: "desc" }).lean();
        const comments = await Comment.find().sort({ createdAt: "asc" }).lean()
        res.render("index.ejs", { posts: posts, comments: comments } );
      } catch (err) {
        console.log(err)
      }
    },
    getWelcome: async (req,res) => {
      try {
        const likedPosts = await Post.find({ user: req.user.id }).sort({likes: "desc"}).lean();
        const posts = await Post.find().populate('user').sort({ likes: "desc" }).lean();
        const comments = await Comment.find().sort({ createdAt: "asc" }).lean()
        res.render("welcome.ejs",{user: req.user, posts: posts, likedPosts: likedPosts, comments: comments})
      } catch (err){
        console.log(err)
      }
    },
    postFeedback: async (req,res, next) => {
      console.log("wowowo")
      // need two options for guest or logged in user
      if(!req.user){
        // two options here too- either new guest(if) or returning guest(else)
        // get guest then post then logout guest
        try {
            console.log(req.url, "postingGuestFeedback")
            // duplicate posts from same guest
            const guest = await new Guest({
              userName: req.body.userName,
              email: req.body.email,
            });
            console.log(guest)
            Guest.findOne(
              { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
              (err, existingGuest) => {
                console.log("small")
                if (err) {
                  console.log("small error")

                  return next(err);
                }
                if (existingGuest) {
                  console.log(guest, "closer")

                //   try {
                //   const feedback = await Feedback.create({
                //       user: req.user.id,
                    
                //       guest: req.guest.id,
                //       email: req.body.email,
                //       message: req.body.message,

                //   })
                //   console.log(feedback, "winninging")
                //   req.flash("info", {
                //     msg: "Exsisting user Account with that email address Thank you username already exists.",
                //   });
                //   return res.redirect("../#footer");
                // }catch (err){
                //   console.log(err)
                // }

              }
            })
              
            
          } catch (err){
            console.log(err)
          }
              

      } else {
        // there is a req.user
        try {
              await Feedback.create({
                user: req.user.id,
                guest: req.user.id,
                email: req.body.email,
                message: req.body.message,
                
              });
      
              console.log("Feedback has been added!YAYYAAY");
              req.flash("info", {
                    msg: `Your message was sent. Thank you, ${req.user.userName} for your feedback!`,
                  });
              res.redirect("/#footer");
            } catch (err) {
              console.log(err, "from home controller postFeedback");
            } 
        
      }
  }
}
      // }else{
      //   // if there is a req.user
      //   try {
      //     await Feedback.create({
      //       user: req.user.id,
      //       guest: req.user.id,
      //       email: req.body.email,
      //       message: req.body.message,
            
      //     });
  
      //     console.log("Feedback has been added!YAYYAAY");
      //     res.redirect("/#footer");
      //   } catch (err) {
      //     console.log(err, "from home controller postFeedback");
      //   } 
      // }
      // console.log("error home controller")
        
    
        
            // guest.save((err) => {
            //   if (err) {
            //     return next(err);
            //   }
            //    req.logIn(guest, (err) => {
          // if (err) {
          //   return next(err);
          // }
          // console.log("error home controller")
          // console.log(req.headers)
          // delete req.headers
          // console.log(req.headers)
          // console.log("try")
          // // maybe auto logout guest?

          // res.end()
          // res.redirect("/#footer");
          // }
          // );
              // });
            // },
          
          //  await Feedback.create({
          //   // user: req.user.id,
          
          //   guest: req.user.id,
          //   email: req.body.email,
          //   message: req.body.message,
        
          //   }));
          //   console.log("Feedback guest has been added! YaY!!", guest);
          //   req.flash("success", { msg: "Success! Message sent. Thank You for your input." });
          //   res.redirect("/#footer");
          // } catch (err) {
          //   console.log(err, "from home controller postFeedback Not req.user");
          // }
        // }catch (err){
        //   console.log(err)
        // }
    



   // createPost: async (req, res) => {
    //   try {
    //     // Upload image to cloudinary- make option for posts without image
        
    //     const result = await cloudinary.uploader.upload(req.file.path);
    //     console.log("result=",result)
  
    //     await Post.create({
    //       title: req.body.title,
    //       image: result.secure_url,
    //       cloudinaryId: result.public_id,
    //       caption: req.body.caption,
    //       likes: 0,
    //       user: req.user.id,
    //     });
    //     console.log("Post has been added!");
    //     res.redirect("/profile");
    //   } catch (err) {
    //     console.log(err);
    //   } 
    // },




         
