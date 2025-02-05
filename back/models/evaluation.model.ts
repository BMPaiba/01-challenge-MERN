import mongoose from "mongoose";

const EvaluationSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  evaluator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  categories: [
    {
      name: { type: String, required: true },
      score: { type: Number, min: 1, max: 5, required: true },
      comments: { type: String },
    },
  ],
  feedback: [
    {
      feedbackId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      message: { type: String, required: true },
    }
  ],
});

export default mongoose.model("Evaluation", EvaluationSchema);
