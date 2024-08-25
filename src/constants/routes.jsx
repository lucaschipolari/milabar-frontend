import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import UserDetailView from "../views/UserDetailView";
import HomeView from "../views/HomeView";
import UserManagement from "../views/UserManagament";
import PrincipalProductoView from "../views/PrincipalProductoView";
import DetalleProductoView from "../views/DetalleProductoView";
import ContactView from "../views/ContactView";
import MenuView from "../views/MenuView";
import AcercaDeNosotrosView from "../views/AcercaDeNosotrosView";
import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import AuthLayout from "../components/Auth/AuthLayout";
import PrivateView from "../views/routing/PrivateView";
import ProfileView from "../views/ProfileView";

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
        path: "/menu",
        element: <MenuView />,
      },
      {
        path: "/profile/:id",
        element: <ProfileView />,
      },
      {
        path: "/acerca-de-nosotros",
        element: <AcercaDeNosotrosView />,
      },
      {
        path: "/productos/:id",
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
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: "",
        element: <PrivateView />,
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
