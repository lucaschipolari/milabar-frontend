import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import UserDetailView from "../views/UserDetailView";
import HomeView from "../views/HomeView";
import UserManagement from "../views/UserManagament";
import PrincipalProductoView from "../views/PrincipalProductoView";
import DetalleProductoView from "../views/DetalleProductoView";
import ContactView from "../views/ContactView";

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
        path: "users/detail/:id",
        element: <UserDetailView />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "/productos",
        element: <PrincipalProductoView />,
      },
      {
        path: "/detalle/:id",
        element: <DetalleProductoView />,
      },
      {
        path: "/agregar-producto",
        element: <DetalleProductoView />,
      },
      {
        path: "/contact",
        element: <ContactView />,
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
