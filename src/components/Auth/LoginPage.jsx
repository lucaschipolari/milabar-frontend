import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useSession } from "../../stores/useSession";
import SocialIcons from "./SocialIcons";
import { postLoginFn } from "../../api/usersApi";
import Input from "../ui/input/Input";
import Swal from "sweetalert2";
import "./auth.css";

const LoginPage = (props) => {
  const {toggleView}=props;
  const { login } = useSession();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`¡Bienvenido, ${userData.username}!`);
      login(userData, userData.token);
      reset();
      setTimeout(() => navigate("/menu"), 0);
    },
    onError: (e) => {
      toast.dismiss();

      if (e.message === "El mail no está registrado") {
        Swal.fire({
          title: "Parece que no estás registrado",
          text: "Dirigete a la opción: Crear cuenta",
          icon: "warning",
        });
      } else {
        toast.warning(e.message || "Error en el inicio de sesión");
      }
      reset();
    },
  });

  const handleSubmitForm = (data) => {
    toast.loading("Cargando...");
    postLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-blue-color form-custom">
      <h1 className="text-center all-text-color mt-2 fw-bold">
        ¡Bienvenido otra vez!
      </h1>
      <h4 className="text-center all-text-color mt-2">Inicio de sesión</h4>
      <div className="form-content pt-3 all-bg-color">
        <div className="form-group mx-5">
          <Input
            className="mb-2 all-bg-color border-primary blue-color"
            error={errors.email}
            label="Email"
            name="email"
            placeholder="mail@mail.com"
            options={{
              required: "Este campo es requerido",
            }}
            register={register}
          />
          <Input
          className="mb-2 all-bg-color border-primary blue-color"
            error={errors.password}
            label="Contraseña"
            name="password"
            placeholder="Contraseña"
            options={{
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: 15,
            }}
            register={register}
            type="password"
          />
        </div>
        <div className="row mt-2 mx-5">
          <Link
            to="/forgot-password"
            className="col-12 red-color mt-2 text-decoration-none text-center"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Iniciar sesión
            </button>
          <p className="text-center blue-color mt-3">O ingresa con</p>
          <SocialIcons />
          </div>
        </div>
        <p className="text-center blue-color mt-2 mb-0 p-3">
          Si aún no tenes una cuenta,
          <Link
            className="all-text-color red-color fw-bold text-decoration-none"
            onClick={toggleView}
            to="register"
          >
            {" "}
            registrate aquí
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginPage;
