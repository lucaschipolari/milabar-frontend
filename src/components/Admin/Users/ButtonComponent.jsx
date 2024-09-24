const ButtonComponent = ({ onOpenModal }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onOpenModal}>
      Launch demo modal
    </button>
  );
};

export default ButtonComponent;
