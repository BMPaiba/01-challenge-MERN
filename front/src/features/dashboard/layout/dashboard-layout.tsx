import { NavLink, Outlet, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useEffect } from "react";
import { ModeToggle } from "@/components/common/mode-toggle";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuthActions();
  const { isAuthenticated, isLoading, user } = useAuth();

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
        <Button onClick={logoutUser}> Logout </Button>
      </nav>
      {user?.role === "Admin" && <div>Admin</div>}
      {user?.role === "Manager" && <div>Manager</div>}
      {user?.role === "Employee" && <div>Employee</div>}
      <Outlet />
    </div>
  );
};
