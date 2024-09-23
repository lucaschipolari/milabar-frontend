const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const postProductoFn = async (data) => {
  const token = sessionStorage.getItem("token");
  const res = await fetch(`${BACKEND_URL}/productos/agregar-producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error guardando el producto");
  }
};

export const getProductosFn = async () => {
  const res = await fetch(`${BACKEND_URL}/productos`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ocurrió un error leyendo las entradas del producto");
  }

  return data;
};

export const getProductoFn = async (productoId) => {
  const res = await fetch(`${BACKEND_URL}/productos/detalle/${productoId}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error leyendo la entrada del producto seleccionado"
    );
  }

  return data;
};

export const deleteProductoFn = async (productoId) => {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${BACKEND_URL}/productos/${productoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error intentando eliminar el producto seleccionado"
    );
  }
};

export const putProductoFn = async ({ productoId, data }) => {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${BACKEND_URL}/productos/detalle/${productoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(
      "Ocurrió un error intentando editar el producto seleccionado"
    );
  }
};

// export const getCategory = async (req, res) => {
//   const res = await fetch(`${BACKEND_URL}/categorias`);
//   const data = await res.json();
// };
