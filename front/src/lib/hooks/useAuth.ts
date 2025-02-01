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
