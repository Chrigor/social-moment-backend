import { Schema, model  } from 'mongoose';

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

const FollowModel = model('Follows', FollowSchema);

export default FollowModel;