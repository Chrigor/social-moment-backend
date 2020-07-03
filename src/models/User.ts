import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      select: true,
      required: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    accountChecked: {
      type: Boolean,
      select: false,
      default: false,
      required: true,
    },
    accountToken: {
      type: String,
      select: false,
      default: "123456",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
