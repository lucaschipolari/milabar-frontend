import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";
import { useState } from "react";
import {
  sendEmailToClient,
  sendEmailToRestaurant,
} from "../../utilities/sendEmail";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const [resetCount, setResetCount] = useState(false);

  const handleSumbit = (data) => {
    console.log(data);

    Swal.fire({
      title: "Estas a punto de enviar un email",
      text: "¿Estás seguro de enviarlo?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, enviar!",
      confirmButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        Promise.all([sendEmailToClient(data), sendEmailToRestaurant(data)])

          .then(() => {
            Swal.fire({
              title: "Enviado",
              text: "Tu email fue enviado con exito!",
              icon: "success",
            });
            reset();
            setResetCount(true);
            setTimeout(() => setResetCount(false), 0);
          })
          .catch(() => {
            Swal.fire({
              title: "Error",
              text: "Hubo un error al enviar el email",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <form
      onSubmit={onSubmitRHF(handleSumbit)}
      className="bg-body-tertiary rounded shadow m-5 text-center"
    >
      <h1>Contactanos!</h1>
      <Input
        className="m-3"
        error={errors.issue}
        label="Asunto"
        name="issue"
        options={{
          required: {
            value: true,
            message: "El campo asunto es requerido",
          },
          minLength: {
            value: 5,
            message: "El campo asunto debe tener al menos 5 caracteres",
          },
          maxLength: {
            value: 50,
            message: "El campo asunto debe tener un maximo de 50 caracteres",
          },
          pattern: {
            value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9\s.,!?()-]+$/,
            message:
              "El campo asunto solo puede contener letras, números, espacios y ciertos caracteres de puntuación (. , ! ? () -)",
          },
          validate: {
            noExtraSpace: (value) =>
              !/\s{2,}/.test(value) ||
              "El campo asunto no puede contener múltiples espacios consecutivos",
            noOnlySpace: (value) =>
              value.trim().length > 0 ||
              "El campo asunto no puede estar compuesto solo de espacios en blanco",
          },
        }}
        placeholder=""
        register={register}
      />
      <Input
        className="m-3"
        error={errors.name}
        label="Nombre"
        name="name"
        options={{
          required: {
            value: true,
            message: "El nombre es requerido",
          },
          minLength: {
            minLength: 2,
            message: "El nombre debe tener al menos 2 caracteres",
          },
          maxLength: {
            maxLength: 30,
            message: "El nombre debe tener un maximo de 30 caracteres",
          },
          pattern: {
            value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/,
            message: "El campo nombre solo puede contener letras",
          },
          validate: {
            noExtraSpace: (value) =>
              !/\s{2,}/.test(value) ||
              "El campo nombre no puede contener múltiples espacios consecutivos",
            noOnlySpace: (value) =>
              value.trim().length > 0 ||
              "El campo nombre no puede estar compuesto solo de espacios en blanco",
          },
        }}
        register={register}
      />
      <Input
        className="m-3"
        error={errors.lastname}
        label="Apellido"
        name="lastname"
        options={{
          required: {
            value: true,
            message: "El apellido es requerido",
          },
          minLength: {
            minLength: 2,
            message: "El apellido debe tener al menos 2 caracteres",
          },
          maxLength: {
            maxLength: 30,
            message: "El apellido debe tener un maximo de 30 caracteres",
          },
          pattern: {
            value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/,
            message: "El campo apellido solo puede contener letras",
          },
          validate: {
            noExtraSpace: (value) =>
              !/\s{2,}/.test(value) ||
              "El campo apellido no puede contener múltiples espacios consecutivos",
            noOnlySpace: (value) =>
              value.trim().length > 0 ||
              "El campo apellido no puede estar compuesto solo de espacios en blanco",
          },
        }}
        register={register}
      />
      <Input
        className="m-3"
        error={errors.email}
        label="Email"
        name="email"
        options={{
          required: {
            value: true,
            message: "El email es requerido",
          },
          maxLength: {
            value: 254,
            message: "El campo email no puede exceder los 254 caracteres",
          },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "El formato del correo electrónico no es válido",
          },
        }}
        register={register}
        type="email"
      />
      <Input
        className="m-3"
        error={errors.message}
        label="Mensaje"
        name="message"
        options={{
          required: {
            value: true,
            message: "El mensaje es requerido",
          },
          minLength: {
            value: 10,
            message: "El campo mensaje debe tener al menos 10 caracteres",
          },
          maxLength: {
            value: 500,
            message: "El campo mensaje debe tener un máximo de 500 caracteres",
          },
          pattern: {
            value: /^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9\s.,!?()-]+$/,
            message:
              "El campo mensaje solo puede contener letras, números y ciertos caracteres de puntuación (. , ! ? () -)",
          },
          validate: {
            noExtraSpaces: (value) =>
              !/\s{2,}/.test(value) ||
              "El campo mensaje no puede contener múltiples espacios consecutivos",
            noOnlySpaces: (value) =>
              value.trim().length > 0 ||
              "El campo mensaje no puede estar compuesto solo de espacios en blanco",
          },
        }}
        register={register}
        textarea
        maxLength={500}
        resetCount={resetCount}
      />
      <div className="text-center mt-3">
        <button className="btn btn-primary mb-3" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
