import evaluationModel from "@/models/evaluation.model";

export class FeedbackService {
  static async createFeedback(evaluationId: string, message: string, givenBy: string) {
    try {
      const feedback = { evaluationId, message, givenBy };
      const updateEvaluation = await evaluationModel.updateOne(
        { _id: evaluationId },
        { $push: { feedback: feedback } }
      )
      const evaluation = await evaluationModel.findById(evaluationId);
      return evaluation;
    } catch (error) {
      throw new Error("Error al crear el feedback");
      
    }
  }
}
