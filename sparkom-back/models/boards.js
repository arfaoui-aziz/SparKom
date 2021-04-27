var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boards = new Schema(
  {
    board_name: {
      type: String,
      required: false,
    },
    is_public: {
      type: String,
      default: false,
    },
    creator_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("boards", boards);