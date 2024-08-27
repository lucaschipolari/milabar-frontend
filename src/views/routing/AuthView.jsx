import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../stores/useSession.js";

const AuthView = () => {
  const { isLoggedIn } = useSession();

  if (isLoggedIn) return <Navigate to="/" />;

  return <Outlet />;
};

export default AuthView;
