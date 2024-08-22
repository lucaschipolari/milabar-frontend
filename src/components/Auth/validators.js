// src/utils/validators.js

export const validateName = (value) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  
    if (value.trim().length < 3) {
      return "El nombre debe tener al menos 3 caracteres";
    }
  
    if (!regex.test(value)) {
      return "El nombre contiene caracteres no válidos";
    }
  
    return true;
  };
  
  export const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!regex.test(value)) {
      return "Correo electrónico no válido";
    }
  
    return true;
  };
  
  export const validatePassword = (value) => {
    if (value.trim().length < 8) {
      return "La contraseña debe tener al menos 8 caracteres";
    }
  
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(value)) {
      return "La contraseña debe incluir mayúsculas, minúsculas, números y caracteres especiales";
    }
  
    return true;
  };
  