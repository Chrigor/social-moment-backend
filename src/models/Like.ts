import { model, Schema, Document } from "mongoose";

interface ILike {
  id_post: Number;
  id_user: Number;
}

type LikeType = ILike & Document;

const LikeSchema = new Schema(
  {
    id_post: {
      type: String,
      required: true,
    },
    id_user: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const LikeModel = model<LikeType>("Like", LikeSchema);

export default LikeModel;
