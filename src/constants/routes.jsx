import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/routing/RootView";
import UserDetailView from "../views/UserDetailView";
import HomeView from "../views/HomeView";
import UserManagement from "../views/UserManagament";
import PrincipalProductoView from "../views/PrincipalProductoView";
import DetalleProductoView from "../views/DetalleProductoView";
import ContactView from "../views/ContactView";
import MenuView from "../views/MenuView";
import AboutUsView from "../views/AboutUsView";
import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import PrivateView from "../views/routing/PrivateView";
import ProfileView from "../views/ProfileView";
import LoginRegisterView from "../views/LoginRegisterView";
import AuthView from "../views/routing/AuthView";
import ProductDetailView from "../views/ProductDetailView";
import AdminOptions from "../views/AdminOptions";
import NotFoundView from "../views/NotFoundView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      // RUTAS PÚBLICAS
      {
        path: "/",
        element: <HomeView />,
      },

      {
        path: "menu",
        element: <MenuView />,
      },
      {
        path: "profile",
        element: <ProfileView />,
      },
      {
        path: "/acerca-de-nosotros",
        element: <AboutUsView />,
      },

      // {
      //   path: "productos/:id",
      //   element: <PrincipalProductoView />,
      // },

      {
        path: "detalle/:id",
        element: <ProductDetailView />,
      },

      {
        path: "contact",
        element: <ContactView />,
      },

      {
        path: "/",
        element: <AuthView />,
        children: [
          {
            path: "user",
            element: <LoginRegisterView />,
            children: [
              {
                path: "login",
                element: <LoginPage />,
              },
              {
                path: "login",
                element: <RegisterPage />,
              },
            ],
          },
        ],
      },
      // RUTAS PRIVADAS
      {
        path: "/",
        element: <PrivateView />,
        children: [
          {
            path: "admin",
            element: <AdminOptions />,
          },
          {
            path: "users",
            element: <UserManagement />,
          },
          {
            path: "modificar-producto/:id",
            element: <DetalleProductoView />,
          },
          {
            path: "agregar-producto",
            element: <DetalleProductoView />,
          },
          {
            path: "productos-admin",
            element: <PrincipalProductoView />,
          },
          {
            path: "users/detail/:id",
            element: <UserDetailView />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundView />,
      },
    ],
  },
]);
