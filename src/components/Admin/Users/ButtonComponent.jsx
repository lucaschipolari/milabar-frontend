const ButtonComponent = ({ onOpenModal }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onOpenModal}>
      Editar Rol
    </button>
  );
};

export default ButtonComponent;
