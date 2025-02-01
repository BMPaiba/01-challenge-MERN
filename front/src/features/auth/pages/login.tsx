import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postLoginApi } from "../actions/login.action";

interface IFormInput {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email("Debe ser un correo electrónico válido").max(20, "El correo no debe exceder los 20 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});


export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(schema), 
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const login = await postLoginApi(data);
    console.log(login); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email")}
        className="bg-gray-200 border border-black text-black"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register("password")}
        className="bg-gray-200 border border-black text-black"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
}
