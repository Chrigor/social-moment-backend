import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  birthday: {
    type: Date,
    select: true,
  },
  password: {
    type: String,
    select: true,
  },
  accountChecked: {
    type: Boolean,
    select: true,
  },
  accountToken: {
    type: String,
    select: true
  }
}, {
  timestamps: true,
});

export default model('User', UserSchema);