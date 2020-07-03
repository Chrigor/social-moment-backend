import { model, Schema } from "mongoose";

const LikeSchema = new Schema({
  id_post: {
    type: String,
    required: true,
  },
  id_user: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const LikeModel = model('Like', LikeSchema);

export default LikeModel;