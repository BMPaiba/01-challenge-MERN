import { useAppDispatch } from "@/hooks/useStore";
import { login, logout } from "../store/auth/authSlice";

export const useAuthActions = () => {
  const dispatch = useAppDispatch();

  const loginUser = (user: string, token: string) => {
    dispatch(login({ user, token }));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { loginUser, logoutUser };
};