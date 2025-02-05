import { z } from "zod";

export const createEvaluationValidationSchema = z.object({
  employee: z.string().min(1, "Employee is required"),
  evaluator: z.string().min(1, "Evaluator is required"), 
  date: z.date().optional(), 
  categories: z.array(
    z.object({
      name: z.string().min(1, "Category name is required"),
      score: z.number().min(1, "Score must be at least 1").max(5, "Score must be at most 5"),
      comments: z.string().optional(),
    })
  ),
  feedback: z.array(
    z.object({
      feedbackId: z.string().min(1, "Feedback ID is required"), 
      message: z.string().min(1, "Message is required"),
    })
  ).optional().default([]), 
});