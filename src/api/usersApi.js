const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const putUserFn = async ({ id, isEnabled }) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/usersPrueba/users/${id}`, {
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

export const getUsersFn2 = async (filter) => {
  const res = await fetch(`${BACKEND_URL}/usersPrueba/users/${filter}`);
  const users = res.json();

  if (!res.ok || !Array.isArray(users)) {
    throw new Error("Error fetching data");
  }
  return users;
};
export const getUsersFn = async (filter) => {
  const res = await fetch(`${BACKEND_URL}/api/v1/usersPrueba/users/${filter}`);
  console.log(`${BACKEND_URL}/api/v1/usersPrueba/users/${filter}`);

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
