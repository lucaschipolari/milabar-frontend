import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../stores/useSession.js";

const PrivateView = () => {
  const { isLoggedIn, user } = useSession();

  if (isLoggedIn && user.isAdmin) return <Outlet />;

  return <Navigate to="/" />;
};

export default PrivateView;
