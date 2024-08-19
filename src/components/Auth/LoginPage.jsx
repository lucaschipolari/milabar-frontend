import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postLoginFn } from "../../api/auth";
import useSession from "../../stores/useSession";
import SocialIcons from "./SocialIcons";

const LoginPage = () => {
  const { login } = useSession();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (userData) => {
      toast.dismiss(); // Cerramos el toast de carga
      toast.success(`¡Inicio de sesión exitoso, ${userData.username}!`);
      reset();
      login(userData);
      setTimeout(() => navigate("/"), 1500);
    },
    onError: (e) => {
      toast.dismiss(); // Cerramos el toast de carga
      toast.warning(e.message || "Error en el inicio de sesión");
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Cargando...");
    postLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="form-user-auth">
      <h1>Iniciar sesión</h1>
      <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          {...register("username", {
            required: "El nombre de usuario es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre de usuario debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "El nombre de usuario debe tener menos de 50 caracteres",
            },
          })}
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
        />
        {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>
      <Link to="/forgot-password" className="container-auth-a">¿Olvidaste tu contraseña?</Link>
      <button type="submit" className="btn btn-danger">Iniciar sesión</button>

      <SocialIcons />
    </form>
  );
};

export default LoginPage;
