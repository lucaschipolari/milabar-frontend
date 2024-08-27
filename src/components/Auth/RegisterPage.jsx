import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useSession } from "../../stores/useSession";
import { useNavigate } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { validateName, validateEmail, validatePassword } from "./validators";
import { postRegisterFn } from "../../api/usersApi";
import Input from "../ui/input/Input";

const RegisterPage = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    criteriaMode: "all",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { login } = useSession();
  const navigate = useNavigate();

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: (userData) => {
      toast.dismiss(); // Cerrar cualquier toast de carga
      toast.success(`¡Registro exitoso, ${userData.username}!`);
      login(userData);
      setTimeout(() => navigate("/menu"), 1000);
    },
    onError: (e) => {
      toast.dismiss(); // Cerrar cualquier toast de carga
      toast.warning(e.message || "Error en el registro");
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Cargando...");
    postRegister(data);
  };

  return (
    <form onSubmit={onSubmitRHF(handleSubmitForm)} className="form-user-auth">
      <h1>Crear cuenta</h1>
      <div className="form-group">
        <Input
          name="username"
          type="text"
          label="Nombre"
          placeholder="Nombre"
          error={errors.username}
          register={register}
          options={{
            required: "El nombre es obligatorio",
            validate: validateName,
          }}
        />
        <Input
          name="email"
          type="email"
          label="Eail"
          placeholder="Email"
          error={errors.email}
          register={register}
          options={{
            required: "El mail es obligatorio",
            validate: validateEmail,
          }}
        />
        <Input
          name="password"
          type="password"
          label="Contraseña"
          placeholder="Contraseña"
          error={errors.password}
          register={register}
          options={{
            required: "La contraseña es obligatoria",
            validate: validatePassword,
          }}
        />
      </div>
      <button type="submit" className="btn btn-danger">
        Crear cuenta
      </button>
      <SocialIcons />
    </form>
  );
};

export default RegisterPage;
