// import ListProduct from "./components/CardProduct/ListProduct";
import BasicDemo from "./components/CardProduct/ListProduct";
import Slider from "./components/CardProduct/Slider";
// import CardProduct from "./components/CardProduct/ListProduct";
import ContactView from "./views/ContactView";
import "remixicon/fonts/remixicon.css";

const productos = [
  {
    id: "1", // Agrega un id único
    nombre: "Sándwich de Pavo y Aguacate",
    descripcion:
      "Sándwich con pavo ahumado, aguacate, lechuga y queso cheddar.",
    categoria: "Sándwiches",
    unidadmedida: "unidad",
    preciounitario: 14500,
    imagen: "https://example.com/imagenes/sandwich_pavo_aguacate.jpg",
    habilitado: "true",
  },
];
function App() {
  return (
    <>
      {/* <HomeView /> */}
      {/* <ContactView /> */}
      {/* <ListProduct /> */}
      <Slider productos={productos} />
    </>
  );
}

export default App;
