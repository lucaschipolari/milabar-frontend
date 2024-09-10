import { create } from "zustand";

export const useUser = create((set) => ({
  userToEdit: null,
  setUserToEdit: (newUser) =>
    set({
      userToEdit: newUser,
    }),
  clearUserToEdit: () =>
    set({
      userToEdit: null,
    }),
}));
