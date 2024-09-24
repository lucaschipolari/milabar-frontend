import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { putUsersFn } from "../../api/usersApi";
import { useUser } from "../../stores/useUser.js";
import Input from "../ui/input/Input";

const FormUserEdit = () => {
  const navigate = useNavigate();
  const { userToEdit, clearUserToEdit } = useUser();
  const {
    register,
    handleSubmit: onSubmitRHF,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const queryClient = useQueryClient();
  const { mutate: putUsers } = useMutation({
    mutationFn: putUsersFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada actualizada");
      clearUserToEdit();
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      Swal.fire({
        title: "Éxito",
        text: "Entrada actualizada",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      navigate("/profile"); 
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  if (userToEdit) {
    setValue("username", userToEdit.data.username);
    setValue("email", userToEdit.data.email);
    setValue("role", userToEdit.data.role);
    setValue("avatar", userToEdit.data.avatar);
  }

  const handleSubmit = async (data) => {
    if (userToEdit) {
      const action = await Swal.fire({
        title: "Atención",
        icon: "info",
        html: `¿Estás seguro que deseas editar el usuario <b>"${userToEdit.data.username}"</b>?`,
        confirmButtonText: "Si, editar",
        cancelButtonText: "No, cancelar",
        showCancelButton: true,
      });

      if (action.isConfirmed) {
        toast.loading("Actualizando entrada...");
        const userId = userToEdit.data.id;
        putUsers({ userId, data });
      }
    }
    clearUserToEdit();
    reset();
  };

  const handleCancelEdit = () => {
    clearUserToEdit();
    reset();
  };

  return (
    <form
      className="container bg-white"
      onSubmit={onSubmitRHF(handleSubmit)}
    >
      <h1 className="text-center mt-3">
        Editar usuario
      </h1>
      <hr/>
      <div className="alert alert-warning">
        Atención: Estás modificando la entrada con nombre{" "}
        <b>{userToEdit?.data.username}</b>
      </div>
      <Input
        className="mb-2"
        error={errors.username}
        label="Username"
        name="username"
        options={{
          required: "Este campo es requerido",
          minLength: {
            value: 3,
            message: "El username debe tener al menos 3 caracteres",
          },
          maxLength: {
            value: 100,
            message: "El username debe tener como mucho 100 caracteres",
          },
        }}
        placeholder="Pepe"
        register={register}
      />
      <Input
        textarea
        className="mb-3"
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
            value: 500,
            message: "El email debe tener como mucho 500 caracteres",
          },
        }}
        placeholder="example@mail.com"
        register={register}
      />
      <Input
        className="mb-2"
        error={errors.avatar}
        label="Avatar"
        name="avatar"
        options={{
          required: "Este campo es requerido",
          minLength: {
            value: 5,
            message: "El enlace a la imagen debe tener al menos 5 caracteres",
          },
          pattern: {
            value:
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
            message:
              "El enlace ingresado no es válido, debe ser una URL válida",
          },
        }}
        placeholder="https://google.com"
        register={register}
      />
      <hr />
      <div className="text-end my-3">
        <button className="btn btn-warning me-2" type="button" onClick={handleCancelEdit}>
          Cancelar edición
        </button>
        <button className="btn btn-danger" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default FormUserEdit;
