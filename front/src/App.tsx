import { Route, Routes } from "react-router";
import { AuthLayout } from "@/features/auth/layout/auth-layout";
import Login from "@/features/auth/pages/login";
import Register from "@/features/auth/pages/register";

function App() {
  return (
    <Routes>

      <Route path="*" element={<div>404</div>} />

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;
