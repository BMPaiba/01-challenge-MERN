import  { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie"; // Importamos js-cookie
import { login } from "../store/auth/authSlice";
import { RootState } from "@/store/store";

export const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  console.log({isAuthenticated, user})

  const getJwtFromCookies = () => {
    return Cookies.get("jwt"); 
  };

  useEffect(() => {
    const jwt = getJwtFromCookies();

    if (jwt) {
      // Si hay JWT, puedes hacer una validación del JWT en el backend aquí si lo deseas
      // Guardar los datos en Redux si es necesario
      // Por ejemplo, si tienes un objeto `user` que guardaste previamente:
      const savedUser = JSON.parse(localStorage.getItem("user") || "{}"); // O usar algún otro método
      if (savedUser) {
        dispatch(login(savedUser)); // Despachar al store de Redux
      }
    }

    if (isAuthenticated) {
      // Si no hay JWT o no estamos autenticados, redirigir a login
      navigate("/", { replace: true });
    }
  }, [dispatch, navigate, isAuthenticated]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

