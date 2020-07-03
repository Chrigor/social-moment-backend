import { Schema, model, Document } from "mongoose";

interface IPost {
  id_user:number,
  content:string
}

type PostType = IPost & Document;

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

const PostModel = model<PostType>("Post", PostSchema);

export default PostModel;
