import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { RootState } from "@/store/store";
import { login, logout } from "@/store/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [isLoading, setIsLoading] = useState(true); // ✅ Agregamos estado de carga

  const getJwtFromCookies = () => Cookies.get("jwt");

  useEffect(() => {
    if (!isLoading) return; // ✅ Evita que se vuelva a ejecutar innecesariamente

    const jwt = getJwtFromCookies();

    if (jwt) {
      try {
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (savedUser?.id) {
          dispatch(login(savedUser)); // Guardar en Redux
        }
      } catch (error) {
        console.error("Error al recuperar el usuario:", error);
      }
    } else {
      dispatch(logout());
      navigate("/auth", { replace: true });
    }

    setIsLoading(false); // ✅ Marcamos como terminado el proceso de autenticación
  }, [dispatch, navigate, isLoading]);

  return { isAuthenticated, user, isLoading };
};
