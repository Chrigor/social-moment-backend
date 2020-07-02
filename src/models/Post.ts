import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    id_user: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

export default PostModel;
