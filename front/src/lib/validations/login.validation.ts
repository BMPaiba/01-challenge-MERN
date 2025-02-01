import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Debe ser un correo electrónico válido")
    .max(30, "El correo no debe exceder los 20 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
 