import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDetailUserFn } from "../api/usersApi";
import "../components/Admin/Users/styles/userDetail.css";
import IsLoanding from "../components/Common/IsLoading/isLoading";

const UserDetailView = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => getDetailUserFn(id),
  });

  if (isLoading) {
    return <IsLoanding />;
  }

  if (isError || !user) {
    return (
      <div className="alert alert-danger">
        Ocurrió un error al cargar los datos del usuario.
      </div>
    );
  }

  return (
    <>
      <Link className="btn btn-secondary mb-3" to={-1}>
        Volver
      </Link>
      <div className="card text-center">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center">
            <div className="user-pic-container mb-3">
              <img
                src={user.data.avatar}
                alt={user.data.username}
                className="user-pic rounded-circle img-fluid"
              />
            </div>
            <h5 className="card-title mb-1">{user.data.username}</h5>
            <p className="card-text text-muted mb-4">
              Email: {user.data.email}
            </p>

            <div className="container">
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <p className="mb-1 fw-bold">Pedidos realizados:</p>
                    <p className="display-6">{user.data.orderCount}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <p className="mb-1 fw-bold">Rol:</p>
                    <p className="display-6">
                      {user.data.isAdmin ? "Admin" : "User"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailView;
