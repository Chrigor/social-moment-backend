import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  id_user: {
    type: String,
  },
  content: {
    type: String
  },
  datetime: {
    type: Date,
  },
});

const PostModel = model('Post', PostSchema);

export default PostModel;