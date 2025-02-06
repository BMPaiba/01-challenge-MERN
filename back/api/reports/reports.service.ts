import evaluationModel from "@/models/evaluation.model";
import userModel from "@/models/user.model";

export class ReportsService {
  static async reportByEmployeeId(id: string) {
    try {
      const evaluations = await evaluationModel.find({ employee: id });
      const employee = await userModel.findById(evaluations[0].employee);
      const calculateAverageScore = (evaluations:any) => {
        let totalScore = 0;
        let totalCategories = 0;

        evaluations.forEach((evaluation: any) => {
          evaluation.categories.forEach((category: any) => {
            totalScore += category.score;
            totalCategories += 1;
          });
        });

        const averageScore = totalScore / totalCategories;
        return averageScore;
      };
      const report = {
        name: employee?.firstName + " " + employee?.lastName,
        totalEvaluations: evaluations.length,
        averageScore: calculateAverageScore(evaluations),
      };
      return report;
    } catch (error) {
      throw new Error("Error al obtener el reporte");
    }
  }
}
