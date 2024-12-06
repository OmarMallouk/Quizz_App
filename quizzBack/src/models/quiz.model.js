import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  type: { //"multiple-choice" -- "input"
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [String], 
  answer: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [questionSchema], 
});

export const Quiz = model("Quiz", quizSchema);
