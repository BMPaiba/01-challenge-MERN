import { Route, Routes } from "react-router";
import { AuthLayout } from "@/features/auth/layout/auth-layout";
import Login from "@/features/auth/pages/login";
import { DashboardLayout } from "./features/dashboard/layout/dashboard-layout";
import Dashboard from "./features/dashboard/pages/dashboard";
import { MainLayout } from "./features/main-layout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="*" element={<div>404</div>} />

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
