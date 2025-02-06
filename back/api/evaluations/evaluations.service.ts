import { UserAdditionalServices } from "@/lib/services/user.services";
import evaluationModel from "@/models/evaluation.model";
import userModel from "@/models/user.model";

export class EvaluationsService {
  static async createEvaluation(data: any) {
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
      console.log("no se pudo crear la evaluación", error.message);
      throw new Error(error.message || "Error al crear la evaluación");
    }
  }

  static async getEvaluationById(id: string) {
    try {
      const evaluation = await evaluationModel.findById(id);
      if (!evaluation) {
        throw new Error("No se pudo obtener la evaluación");
      }
      return evaluation;
    } catch (error) {
      throw new Error("Error al obtener la evaluación");
    }
  }

  static async updateEvaluation(id: string, updatedData: any) {
    try {
      const employee = await UserAdditionalServices.userByEmail(updatedData.employee);
      const evaluator = await UserAdditionalServices.userByEmail(updatedData.evaluator);
      if (!employee || !evaluator) {
        throw new Error("No se encontraron empleados o evaluadores");
      }
      updatedData.employee = employee._id;
      updatedData.evaluator = evaluator._id;
      const result = await evaluationModel.updateOne(
        { _id: id },
        { $set: updatedData }
      );

      const evaluation = await this.getEvaluationById(id);

      console.log({ evaluation }); // Para ver qué devuelve la actualización

      if (result.matchedCount === 0) {
        throw new Error("No se encontró la evaluación para actualizar");
      }

      if (result.modifiedCount === 0) {
        throw new Error("No se realizaron cambios en la evaluación");
      }

      return evaluation;
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar la evaluación");
    }
  }


  static getEvaluationsByEmployeeId(id: string) {
    return { message: `Lista de evaluaciones del empleado con ID ${id}` };
  }

  static getAllEvaluations() {
    return { message: "Lista de todas las evaluaciones" };
  }
}
