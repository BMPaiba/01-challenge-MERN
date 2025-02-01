import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/lib/validations/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postLoginApi } from "../actions/login.action";
import Swal from "sweetalert2";
import { useAuthActions } from "../hooks/useAuthActions";

interface LoginForm {
  email: string;
  password: string;
}

export function FormLogin() {
  const { loginUser } = useAuthActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const loginResponse = await postLoginApi(data);
      loginUser(loginResponse.user.email, loginResponse.jwt);
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        title: "Usuario o contraseña incorrecta!",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Completa los campos e inicia sesion</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} placeholder="johndoe@email.com" />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} id="password" />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit(onSubmit)}>Login</Button>
      </CardFooter>
    </Card>
  );
}