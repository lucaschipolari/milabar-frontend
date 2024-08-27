const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const sendProduct = async (data) => {
    console.log(data)
  try {
    const res = await fetch(`${BACKEND_URL}/shoppingCart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al enviar los datos');
    }

    const result = await res.json()
    return result
  } catch (error) {
    console.error("Hubo un problema con la solicitud",error)
    throw error;
  }
};
