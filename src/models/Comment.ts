import { model, Schema, Document } from "mongoose";

interface IComment {
  id_post: Number;
  id_user: Number;
  content: String;
}

type CommentType = IComment & Document;

const CommentSchema = new Schema(
  {
    id_post: {
      type: String,
      required: true,
    },
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

const CommentModel = model<CommentType>("Comment", CommentSchema);

export default CommentModel;
