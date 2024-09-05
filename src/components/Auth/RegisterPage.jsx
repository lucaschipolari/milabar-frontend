import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Input from "../ui/input/Input";
import SocialIcons from "./SocialIcons";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateRepeatPassword,
} from "./validators";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "../../stores/useSession";
import { postRegisterFn } from "../../api/usersApi";

const RegisterPage = (props) => {
  const { toggleView } = props;
  const { login } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: (userData) => {
      toast.dismiss();
      toast.success(`¡Registro exitoso, ${userData.username}!`);
      reset();
      login(userData);
      setTimeout(() => navigate("/menu"), 0);
    },
    onError: (e) => {
      toast.dismiss();
      toast.warning(e.message || "Error en el registro");
    },
  });

  const handleSubmitForm = (userData) => {
    toast.loading("Cargando...");
    postRegister(userData);
    toast.dismiss();
  };

  const navigate = useNavigate();

  const passwordPopover = (
    <Popover id="password-popover">
      <Popover.Body>
        La contraseña debe cumplir con los siguientes requisitos:
        <ul>
          <li>Entre 8 y 15 caracteres</li>
          <li>Al menos una letra minúscula</li>
          <li>Al menos una letra mayúscula</li>
          <li>Al menos un número</li>
          <li>Al menos un carácter especial ($@$!%*?&)</li>
          <li>No debe contener espacios</li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-blue-color form-custom">
      <h1 className="text-center all-text-color m-2 fw-bold">
        ¡Bienvenido!
      </h1>
      <h4 className="text-center all-text-color mt-2">Crear cuenta</h4>
      <div className="form-content pt-3 all-bg-color">
        <div className="form-group mx-5">
          <Input
            className="mb-2 all-bg-color border-primary blue-color"
            name="username"
            type="text"
            label="Nombre de usuario"
            placeholder="Nombre"
            error={errors.username}
            register={register}
            options={{
              required: "El nombre es obligatorio",
              validate: validateName,
            }}
          />
          <Input
            className="mb-2 all-bg-color all-bg-color border-primary blue-color"
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            error={errors.email}
            register={register}
            options={{
              required: "El mail es obligatorio",
              validate: validateEmail,
            }}
          />
          <Input
            className="mb-2 all-bg-color border-primary blue-color"
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
          <Input
            className="mb-2 all-bg-color border-primary blue-color"
            name="repeatPassword"
            type="password"
            label="Repetir contraseña"
            placeholder="Repetir contraseña"
            error={errors.repeatPassword}
            register={register}
            options={{
              required: "La confirmación de la contraseña es obligatoria",
              validate: (repeatPassword) =>
                validateRepeatPassword(repeatPassword, getValues),
            }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center my-3">
          <button type="submit" className="btn btn-primary text-center">
            Crear cuenta
          </button>
        </div>
        <div className="mx-5 pb-2">
          <p className="text-center blue-color">O create una cuenta con</p>
          <SocialIcons />
        </div>
        <p className="text-center blue-color mb-0 p-3">
          Si ya tenes una cuenta,
          <span
            className="all-text-color red-color text-decoration-none fw-bold"
            onClick={toggleView}
          >
            {" "}
            inicia sesión aquí
          </span>
        </p>
      </div>
    </form>
  );
};

export default RegisterPage;
