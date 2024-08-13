import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";

const ContactForm = () => {
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
  } = useForm();

  const handleSumbit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={onSubmitRHF(handleSumbit)}
      className="bg-body-tertiary rounded shadow m-5"
    >
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
          minLength: 5,
          maxLength: 100,
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
          minLength: 2,
          maxLength: 50,
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
          minLength: 2,
          maxLength: 50,
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
          minLength: 2,
          maxLength: 50,
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
            message: "El email es requerido",
          },
          minLength: 2,
          maxLength: 50,
        }}
        register={register}
        textarea
      />
    </form>
  );
};
export default ContactForm;
