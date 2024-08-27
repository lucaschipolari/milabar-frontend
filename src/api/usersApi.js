const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { decodeJWT } from "../utilities/decodeJWT";

export const putUserFn = async ({ id, isEnabled }) => {
  const res = await fetch(`${BACKEND_URL}/usersPrueba/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isEnabled }),
  });
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
};

export const getUsersFn = async (filter) => {
  const res = await fetch(`${BACKEND_URL}/usersPrueba/users/${filter}`);

  // Revisa el tipo de contenido de la respuesta
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const users = await res.json(); // Asegúrate de esperar el resultado de `json()`

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    return users;
  } else {
    const text = await res.text(); // Intenta leer la respuesta como texto
    console.error("Respuesta no JSON recibida:", text);
    throw new Error("El servidor no devolvió un JSON válido");
  }
};
export const getDetailUserFn = async (id) => {
  const res = await fetch(`${BACKEND_URL}/usersPrueba/users/detail/${id}`);
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
    throw new Error(res.message || "Ocurrió un error");
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

  const res = await fetch(`${BACKEND_URL}/profile/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Agrega el token en la cabecera de autorización si es necesario
    },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error leyendo la entrada del usuario");
  }

  return await res.json(); 
};

export const putUsersFn = async ({ userId, data }) => {
  const token = sessionStorage.getItem('token');

  if (!token) {
    throw new Error("No se encontró el token");
  }

  const res = await fetch(`${BACKEND_URL}/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`, // Agrega el token en la cabecera de autorización
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error intentando editar el usuario seleccionado");
  }

  return await res.json(); // Asegúrate de retornar el JSON de la respuesta
};
