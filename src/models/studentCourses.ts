import mongoose, { Schema, models } from 'mongoose';

const studentCoursesSchema = new Schema(
  {
    studentId: {
      type: String, // Reference to the student
      required: true,
    },
    courseId: {
      type: String, // Reference to the course
      required: true,
    },
    status: {
      type: String, // e.g, 'active', 'in progress', 'completed'
      required: true,
    },
    grade: {
      type: String, // e.g, 'A', 'A+', 'B', 'C', 'D', 'F'
      required: false,
    },
    enrolledAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const StudentCourses = models.StudentCourses || mongoose.model('StudentCourses', studentCoursesSchema);

export default StudentCourses;
