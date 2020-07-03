import { model, Schema } from "mongoose";

const ShareSchema = new Schema({
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

const ShareModel = model('Share', ShareSchema);

export default ShareModel;