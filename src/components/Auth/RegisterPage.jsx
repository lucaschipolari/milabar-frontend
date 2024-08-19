import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { postRegisterFn } from "../../api/auth";
import useSession from "../../stores/useSession";
import { useNavigate } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { validateName, validateEmail, validatePassword } from "./validators";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
      reset();
      login(userData);
      setTimeout(() => navigate("/"), 1500);
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
    <form onSubmit={handleSubmit(handleSubmitForm)} className="form-user-auth">
      <h1>Crear cuenta</h1>
      <div className="form-group">
        <label htmlFor="username">Nombre</label>
        <input
          id="username"
          type="text"
          placeholder="Nombre"
          {...register("username", {
            validate: validateName,
          })}
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
        />
        {errors.username && (
          <div className="invalid-feedback">{errors.username.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            validate: validateEmail,
          })}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "La contraseña es obligatoria",
            validate: validatePassword,
          })}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-danger">
        Crear cuenta
      </button>

      <SocialIcons />
    </form>
  );
};

export default RegisterPage;
