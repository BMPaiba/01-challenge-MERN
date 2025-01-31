import userModel from "@/models/user.model";
import bcrypt from "bcrypt";

export class AuthService {
  static async login(email: string, password: string) {
    const user = await userModel.findOne({ email });
    if (!user) {
      return { message: "Usuario no encontrado" };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { message: "Contraseña incorrecta" };
    }
    return { message: "Login exitoso 🚀", user };
  }
  

  static async register(firstName: string, lastName: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({ firstName, lastName, email, password: hashedPassword });
    return { message: "Usuario registrado ✅", user };
  }
}
