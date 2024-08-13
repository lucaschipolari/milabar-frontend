import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import UserDetailView from "../views/UserDetailView";
import HomeView from "../views/HomeView";
import UserManagement from "../components/Admin/Users/UserManagament";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "user/detail/:id",
        element: <UserDetailView />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      // RUTAS DE AUTENTICACION
      // no deberían poder accederse estando logueados
      {
        path: "",
        element: <div></div>,
        children: [
          {
            path: "login",
            element: <div></div>,
          },
          {
            path: "register",
            element: <div></div>,
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: "",
        element: <div></div>,
        children: [
          {
            path: "admin",
            element: <div></div>,
          },
        ],
      },
      {
        path: "*",
        element: <div></div>,
      },
    ],
  },
]);
