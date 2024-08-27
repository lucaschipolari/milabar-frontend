const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const sendContactData = async (data) => {
  try {
    const res = await fetch(`${BACKEND_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("error al enviar los datos");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Hubo un problema con la solicitud", error);
    throw error;
  }
};
