import { useAppSelector } from "@/hooks/useStore";

export default function Dashboard() {

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);


  return <div>
    {JSON.stringify(user?.email)}
  </div>;
}


