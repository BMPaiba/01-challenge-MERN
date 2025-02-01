import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginApi } from "../actions/login.action";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

interface IFormInput {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string()
    .email("Debe ser un correo electrónico válido")
    .max(20, "El correo no debe exceder los 20 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export default function Login() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const loginResponse = await postLoginApi(data);
      dispatch(login({ user: loginResponse.user, token: loginResponse.jwt }));
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} className="bg-gray-200 border border-black text-black" />
        {errors.email && <p>{errors.email.message}</p>}

        <input {...register("password")} className="bg-gray-200 border border-black text-black" />
        {errors.password && <p>{errors.password.message}</p>}

        <input type="submit" />
      </form>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
