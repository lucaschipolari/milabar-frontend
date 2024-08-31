import Input from "../components/ui/input/Input";

const hola = () => {
  return (
    <div>
      <Input type="text" placeholder="Ingresa tu nombre" />
      <h1>Hola, {localStorage.getItem("username")}</h1>
    </div>
  );
};

export default hola;
