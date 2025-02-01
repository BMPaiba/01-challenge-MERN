import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { login, logout } from "@/features/auth/store/auth/authSlice";
import { useAppSelector } from "../../../hooks/useStore";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  
  const [isLoading, setIsLoading] = useState(true);

  const getJwtFromCookies = () => Cookies.get("jwt");

  useEffect(() => {
    if (!isLoading) return;

    const jwt = getJwtFromCookies();

    if (jwt) {
      try {
        const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (savedUser?.id) {
          dispatch(login(savedUser));
        }
      } catch (error) {
        console.error("Error al recuperar el usuario:", error);
      }
    } else {
      dispatch(logout());
      navigate("/auth", { replace: true });
    }

    setIsLoading(false);
  }, [dispatch, navigate, isLoading]);

  return { isAuthenticated, user, isLoading };
};
