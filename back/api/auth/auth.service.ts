import userModel from "@/models/user.model";
import bcrypt from "bcrypt";

export class AuthService {
  static async login(email: string, password: string) {
    try {
      const user = await userModel.findOne({ email });

      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Contraseña incorrecta");
      }
      return { message: "Login exitoso 🚀", user };
    } catch (error: any) {
      throw new Error(error.message || "Error en el login");
    }
  }

  static async register(firstName: string, lastName: string, email: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userModel.create({ firstName, lastName, email, password: hashedPassword });

      const { password: _, ...userWithoutPassword } = user.toObject();

      return { message: "Usuario registrado ✅", user: userWithoutPassword };
    } catch (error: any) {
      if (error.code === 11000) {
        throw new Error("El correo electrónico ya está registrado");
      }
      if (error instanceof Error) throw new Error("Error al registrar usuario: " + error.message);
    }
  }
}
