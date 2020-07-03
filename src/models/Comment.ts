import { model, Schema } from "mongoose";

const CommentSchema = new Schema({
  id_post: {
    type: String,
    required: true,
  },
  id_user: {
    type: Number,
    required: true
  },
  content: {
    type:String,
    required: true
  }
}, {
  timestamps: true
});

const CommentModel = model('Comment', CommentSchema);

export default CommentModel;