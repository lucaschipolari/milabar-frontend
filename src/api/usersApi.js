const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { decodeJWT } from "../utilities/decodeJWT";

export const putUserFn = async ({ id, isEnabled }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token");
  }
  const res = await fetch(`${BACKEND_URL}/user-info/status/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ isEnabled }),
  });
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
};

export const getUsersFn = async (filter) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token");
  }
  const res = await fetch(`${BACKEND_URL}/user-info/status/${filter}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await res.json();

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  console.log(user);
  return user;
};
export const getDetailUserFn = async (id) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token");
  }

  const res = await fetch(`${BACKEND_URL}/user-info/status/detail/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await res.json();

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  console.log(user);
  return user;
};

export const postLoginFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error");
  }

  const token = resData.data;

  if (!token) {
    console.log("hola");
    throw new Error(resData.message || "Ocurrió un error");
  }

  const userData = decodeJWT(token).user;

  sessionStorage.setItem("token", token);

  return userData;
};

export const postRegisterFn = async (data) => {
  const res = await fetch(`${BACKEND_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
  });

  if (!res.ok) {
    if (res.status === 409) {
      throw new Error("El correo ya está en uso");
    }
    throw new Error(res.message || "Ocurrió un error guardando el usuario");
  }

  const userData = await postLoginFn({
    username: data.username,
    email: data.email,
    password: data.password,
  });

  return userData;
};

export const getUserFn = async (userId) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error("No se encontró el token");
  }

  const res = await fetch(`${BACKEND_URL}/profile/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error leyendo la entrada del usuario");
  }
  return await res.json();
};

export const putUsersFn = async ({ userId, data }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    throw new Error("No se encontró el token");
  }

  const res = await fetch(`${BACKEND_URL}/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error intentando editar el usuario seleccionado"
    );
  }

  return await res.json();
};

export const putRoleUserFn = async ({ userId, data }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    throw new Error("No se encontró el token");
  }

  const res = await fetch(`${BACKEND_URL}/roles/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ roles: data }),
  });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error intentando editar el usuario seleccionado"
    );
  }

  return await res.json();
};
