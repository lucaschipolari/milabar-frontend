import { createBrowserRouter } from "react-router-dom";

import RootView from '../views/routing/Producto/RootView';
import PrincipalProductoView from '../views/PrincipalProductoView';
import DetalleProductoView from '../views/DetalleProductoView';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView/>,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "/",
        element: <PrincipalProductoView/>,
      },
      
      {
        path:"/detalle",
        element: <DetalleProductoView/>,
      },
    ],
  },
]);
