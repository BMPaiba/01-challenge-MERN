import { useAppSelector } from "@/hooks/useStore";

export default function Dashboard() {

  const { isAuthenticated, user , token} = useAppSelector((state) => state.auth);

  console.log({isAuthenticated, user, token});


  return <div>
    {JSON.stringify({isAuthenticated, user: user})}
  </div>;
}


