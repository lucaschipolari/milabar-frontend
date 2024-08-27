import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {useSession}  from "../../stores/useSession";
import SocialIcons from "./SocialIcons";
import { postLoginFn } from "../../api/usersApi";
import Input from "../ui/input/Input";
import Swal from "sweetalert2";
import "./auth.css";

const LoginPage = () => {
  const { login } = useSession();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (userData) => {
      toast.dismiss(); 
      toast.success(`¡Bienvenido, ${userData.username}!`);
      login(userData);
      reset(); 
      setTimeout(() => navigate("/menu"), 0);
    },
    onError: (e) => {
      toast.dismiss(); // Cerramos el toast de carga

      if (e.message === "El mail no está registrado") {
        Swal.fire({
          title: "Parece que no estás registrado",
          text: "Dirigete a la opción: Crear cuenta",
          icon: "warning"
        });
      } else {
        toast.warning(e.message || "Error en el inicio de sesión");
      }
      reset(); // Limpia el formulario en caso de error
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Cargando...");
    postLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="form-user-auth bg-black">
      <h1 className="text-center mt-3 color-red">Iniciar sesión</h1>
      <div className="form-group">
        <Input
          className="mb-2"
          error={errors.email}
          label="Email"
          name="email"
          options={{
            required: "Este campo es requerido",
            minLength: {
              value: 5,
              message: "El email debe tener al menos 5 caracteres",
            },
            maxLength: {
              value: 100,
              message: "El email debe tener como mucho 100 caracteres",
            },
          }}
          placeholder="Milanesa"
          register={register}
        />

        <Input
          error={errors.password}
          label="Contraseña"
          name="password"
          options={{
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            minLength: 3,
            maxLength: 20,
          }}
          register={register}
          type="password"
        />
      </div>
      <Link to="/forgot-password" className="container-auth-a color-red">
        ¿Olvidaste tu contraseña?
      </Link>
      <button type="submit" className="btn btn-danger">
        Iniciar sesión
      </button>
      <SocialIcons />
    </form>
  );
};

export default LoginPage;
