import {  NavLink, Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div>
      <nav className="gap-2 flex items-center justify-center">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/auth" end>
          Login
        </NavLink>
        <NavLink to="/auth/register">Register</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/navigation">Navigation</NavLink>
        <NavLink to="/navigation/user">user</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
