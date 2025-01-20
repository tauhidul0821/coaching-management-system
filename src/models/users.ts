import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

const User = models.User || mongoose.model('User', userSchema);

export default User;
