import { createBrowserRouter } from "react-router-dom";

import RootView from '../views/routing/Producto/RootView';
import PrincipalProductoView from '../views/PrincipalProductoView';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView/>,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "",
        element: <PrincipalProductoView/>,
      },
      {
        path: "detail/:id",
        element: <div></div>,
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
