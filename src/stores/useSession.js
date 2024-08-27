import { create } from "zustand";
import { decodeJWT } from "../utilities/decodeJWT";

let user = null;
let isLoggedIn = false;
let isAdmin = false;

const token = sessionStorage.getItem("token");
if (token) {
  const decoded = decodeJWT(token);
  user = decoded.user;
  isLoggedIn = true;
  isAdmin = decoded.isAdmin; // Aquí se obtiene si es administrador
}

export const useSession = create((set) => {
  return {
    user,
    isLoggedIn,
    isAdmin, // Añadimos el estado de isAdmin
    login: (newUser, newToken) => {
      const decoded = decodeJWT(newToken);
      sessionStorage.setItem("token", newToken);
      set({ user: newUser, isLoggedIn: true, isAdmin: decoded.isAdmin });
    },
    logout: () => {
      sessionStorage.removeItem("token");
      set({ user: null, isLoggedIn: false, isAdmin: false });
    },
  };
});
