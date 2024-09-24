const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getRolesFn = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token");
  }
  const res = await fetch(`${BACKEND_URL}/roles`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const roles = await res.json();

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return roles;
};
