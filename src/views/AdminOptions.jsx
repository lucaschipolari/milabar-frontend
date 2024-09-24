import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSession } from "../stores/useSession";
import { getUserFn } from "../api/usersApi";
import { Link } from "react-router-dom";
import PrincipalProductoView from "./PrincipalProductoView";
import IsLoading from "../components/Common/IsLoading/IsLoading";

const AdminOptions = () => {
  const { user } = useSession();
  const userId = user.id;

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserFn(userId),
    enabled: !!userId,
  });

  if (isLoading) return <IsLoading />;
  if (isError) return <p>Error al cargar los datos del usuario.</p>;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 gap-3">
      <div className="d-flex flex-column align-items-center gap-2">
        <div className="avatar text-center">
          <img
            src={userData.data.avatar}
            alt="User avatar"
            className="rounded-circle w-50"
          />
          <div className="fallback-avatar">U</div>
        </div>
        <span className="fs-4 fw-medium">admin</span>
      </div>
      <Link className="btn btn-primary w-50 " to="/productos-admin">
        ABM PRODUCTOS
      </Link>
      <Link className="btn btn-primary w-50 " to="/users">
        ABM CLIENTES
      </Link>
      <Link className="btn btn-primary w-50 " to="/404">
        Estadísticas
      </Link>
    </div>
  );
};

export default AdminOptions;
