import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../stores/useSession.js";

const PrivateView = () => {
  const { isLoggedIn, user } = useSession();

  if (
    isLoggedIn &&
    user?.roles.some(
      (role) => role.name === "admin" || role.name === "superadmin"
    )
  ) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default PrivateView;
