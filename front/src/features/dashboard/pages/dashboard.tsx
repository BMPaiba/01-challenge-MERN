import { useAppSelector } from "@/hooks/useStore";

export default function Dashboard() {

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  console.log({isAuthenticated, user});

  return <div>Login</div>;
}
