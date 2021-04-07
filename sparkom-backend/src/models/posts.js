const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  post_content: String,
  image: Buffer,
  video: Buffer,
  cretedDate: Date,
  updatedDate: Date,
  likes: [
    {
     
      liker: mongoose.Schema.Types.ObjectId,
    },
  ],
  comments: [
    {
      comment_txt: String,
      commenter: mongoose.Schema.Types.ObjectId,
      cretedDate: Date,
    },
  ],  

  topics: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Topic",
  },
  hashtags: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Hashtag",
  },
      
      

});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;
