import { ThemeProvider } from "@/components/common/theme-provider";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
  );
};
