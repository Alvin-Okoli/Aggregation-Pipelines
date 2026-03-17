import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
    },

    course: {
      type: String,
      required: true,
      index: true,
    },

    level: {
      type: Number,
      enum: [100, 200, 300, 400, 500],
      required: true,
    },

    country: {
      type: String,
      required: true,
      index: true,
    },

    gpa: {
      type: Number, 
      min: 0,
      max: 5,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;