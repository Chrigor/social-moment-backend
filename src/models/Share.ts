import { model, Schema, Document} from "mongoose";

interface IShare {
  id_post:number,
  id_user:number
}

type ShareType = IShare & Document;

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

const ShareModel = model<ShareType>('Share', ShareSchema);

export default ShareModel;