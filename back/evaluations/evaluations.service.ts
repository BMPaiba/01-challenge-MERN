export class EvaluationsService {
  static createEvaluation(evaluationData: any) {
    return { message: "Evaluación creada con éxito ✅", data: evaluationData };
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
