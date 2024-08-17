import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Simulación de una función para obtener datos de usuario
const getUserFn = async (id) => {
  // Datos de ejemplo
  const exampleUsers = [
    {
      id: 1,
      name: "Juan Pérez",
      ordersCount: 5,
      status: "habilitados",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
    },
    {
      id: 2,
      name: "María López",
      ordersCount: 2,
      status: "habilitados",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
    },
    {
      id: 3,
      name: "Carlos García",
      ordersCount: 8,
      status: "deshabilitados",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
    },
    {
      id: 4,
      name: "Ana Fernández",
      ordersCount: 4,
      status: "habilitados",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
    },
    {
      id: 5,
      name: "Lucía Martínez",
      ordersCount: 7,
      status: "deshabilitados",
      pic: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pruebas1.jpg",
    },
  ];

  // Simula la búsqueda del usuario por id
  return exampleUsers.find((user) => user.id === parseInt(id));
};

const UserDetailView = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => getUserFn(id),
  });

  if (isLoading) {
    return <p className="mt-3 text-center">Cargando datos del usuario...</p>;
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
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src={user.pic} alt={user.name} className="user-pic me-3" />
            <div>
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Nro de pedidos: {user.ordersCount}</p>
              <p className="card-text">Estado: {user.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailView;
