import { Schema, model, Document  } from 'mongoose';

interface IFollows {
  id_user_seguidor:Number,
  id_user_seguido:Number,
}


type FollowsType = IFollows & Document;

const FollowSchema = new Schema({
  id_user_seguidor: {
    type: Number,
    required: true
  },
  id_user_seguido: {
    type:Number,
    required: true,
  }
}, {
  timestamps: true
});

const FollowModel = model<FollowsType>('Follows', FollowSchema);

export default FollowModel;