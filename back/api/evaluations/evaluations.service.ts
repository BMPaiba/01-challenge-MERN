import { UserAdditionalServices } from "@/lib/services/user.services";
import evaluationModel from "@/models/evaluation.model";
import userModel from "@/models/user.model";

export class EvaluationsService {
  static async createEvaluation(data: any ) {
    try {
      const employee = await UserAdditionalServices.userByEmail(data.employee);
      const evaluator = await UserAdditionalServices.userByEmail(data.evaluator);
      if (!employee || !evaluator) {
        throw new Error("No se encontraron empleados o evaluadores");
      }
      data.employee = employee._id;
      data.evaluator = evaluator._id;
      const evaluation = await evaluationModel.create(data);
      if (!evaluation) {
        throw new Error("No se pudo crear la evaluación");
      }
      return evaluation;
    } catch (error: any) {
      console.log('no se pudo crear la evaluación', error.message)
      throw new Error(error.message || "Error al crear la evaluación");
    }
  }

  static getEvaluationById(id: string) {
    return { message: `Detalles de la evaluación con ID ${id}` };
  }

  static updateEvaluation(id: string, updatedData: any) {
    return { message: `Evaluación con ID ${id} actualizada ✅`, data: updatedData };
  }

  static getEvaluationsByEmployeeId(id: string) {
    return { message: `Lista de evaluaciones del empleado con ID ${id}` };
  }

  static getAllEvaluations() {
    return { message: "Lista de todas las evaluaciones" };
  }
}
