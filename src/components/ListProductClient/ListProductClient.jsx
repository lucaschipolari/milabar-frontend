import { useQuery } from "@tanstack/react-query";
import { Carousel } from "primereact/carousel";
import ProductCardClient from "./CardProductClient";
import "./style.css";
import { getProductosFn } from "../../api/productos";

const ListProductClient = () => {
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosFn,
  });

  const responsiveOptions = [
    {
      breakpoint: "2400px",
      numVisible: 6,
      numScroll: 1,
    },
    {
      breakpoint: "1024px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  if (isLoading) {
    return <p className="mt-3 text-center">Cargando datos...</p>;
  }

  if (isError) {
    return (
      <div className="alert alert-danger mt-3">
        Ocurrió un error cargando la tabla de productos
      </div>
    );
  }

  if (productos && productos.data.length === 0) {
    return (
      <div className="alert alert-info mt-3">
        No se encontraron productos para listar
      </div>
    );
  }

  // Filtrar productos para cada categoría
  const productosSanguches = productos.data.filter(
    (producto) =>
      producto.categoria === "SANGUCHE" && producto.agregado === "false"
  );

  const productosPizzas = productos.data.filter(
    (producto) =>
      producto.categoria === "PIZZA" && producto.agregado === "false"
  );

  // Define la plantilla para los productos
  const productTemplate = (producto) => {
    return (
      <div className="col-12 p-3">
        <ProductCardClient producto={producto} key={producto.id} />
      </div>
    );
  };

  return (
    <div className="col-12">
      <h3>Sanguches</h3>
      <Carousel
        value={productosSanguches}
        className="col-12"
        numVisible={3}
        numScroll={1}
        orientation="horizontal"
        verticalViewPortHeight="auto"
        itemTemplate={productTemplate}
        responsiveOptions={responsiveOptions}
      />

      <h3 className="mt-5">Pizzas</h3>
      <Carousel
        value={productosPizzas}
        className="col-12"
        numVisible={3}
        numScroll={1}
        orientation="horizontal"
        verticalViewPortHeight="auto"
        itemTemplate={productTemplate}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
};

export default ListProductClient;
