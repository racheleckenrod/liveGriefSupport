const Post = require("../models/Post");
const Comment = require("../models/Comment")

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
    }
}



  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().populate('user').sort({ createdAt: "desc" }).lean();
  //     const comments = await Comment.find().sort({ createdAt: "asc" }).lean()

  //     res.render("feed.ejs", { posts: posts, comments: comments });
  //     console.log(comments, posts)
  //   } catch (err) { 
  //     console.log(err);
  //   }
  // }:

