import userModel from "@/models/user.model";

export class EmployeesService {
  static async getAllEmployees() {
    try {
      const employees = await userModel.find({ role: "Employee" });
      if (!employees) {
        throw new Error("No se encontraron empleados");
      }
      return employees;
    } catch (error: any) {
      throw new Error(error.message || "Error al obtener empleados");
    }
  }
}
