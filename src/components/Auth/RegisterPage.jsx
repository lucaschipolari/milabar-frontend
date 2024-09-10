import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Input from "../ui/input/Input"; // Asegúrate de que la ruta sea correcta
import SocialIcons from "./SocialIcons";
import { validateName, validateEmail, validatePassword } from "./validators";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "../../stores/useSession";
import { postRegisterFn } from "../../api/usersApi";

const RegisterPage = () => {
  const { login } = useSession();
  const {
    register,
    handleSubmit: onSubmitRHF,
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

  const { mutate: postRegister } = useMutation({
    mutationFn: postRegisterFn,
    onSuccess: (userData) => {
      toast.dismiss(); // Cerrar cualquier toast de carga
      // toast.success(`¡Registro exitoso, ${userData.username}!`);
      reset();
      login(userData);
      setTimeout(() => navigate("/"), 1500);
    },
    onError: (e) => {
      toast.dismiss(); // Cerrar cualquier toast de carga
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
    <form
      onSubmit={onSubmitRHF(handleSubmitForm)}
      className="form-user-auth bg-black"
    >
      <h1 className="color-red mt-3">Crear cuenta</h1>
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
          label="Email"
          placeholder="Email"
          error={errors.email}
          register={register}
          options={{
            required: "El mail es obligatorio",
            validate: validateEmail,
          }}
        />
        <div className="password-container">
          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={passwordPopover}
          >
            <span className="d-inline-block">
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
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <button type="submit" className="btn btn-danger">
        Crear cuenta
      </button>
      <SocialIcons />
    </form>
  );
};

export default RegisterPage;
