import mongoose, { Schema, models } from 'mongoose';

const coursesSchema = new Schema(
  {
    name: {
      type: String, // e.g, 'Math, 'English', 'Science'
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    teacherId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Courses = models.Courses || mongoose.model('Courses', coursesSchema);

export default Courses;
