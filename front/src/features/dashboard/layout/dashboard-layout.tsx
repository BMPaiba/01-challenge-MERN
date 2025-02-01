import { NavLink, Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "@/features/auth/store/auth/authSlice";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useEffect } from "react";
import { ModeToggle } from "@/components/common/mode-toggle";

export const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth", { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="flex items-center justify-center space-x-4 py-4 bg-gray-950 text-white">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/auth">Login</NavLink>
        <ModeToggle />
        <Button onClick={() => dispatch(logout())}> Logout </Button>
      </nav>
      <Outlet />
    </div>
  );
};
