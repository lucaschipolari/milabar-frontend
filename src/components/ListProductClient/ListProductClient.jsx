import { useQuery } from "@tanstack/react-query";
import { Carousel } from "primereact/carousel";
import "./style.css";
import { getProductosFn } from "../../api/productos";
import PropTypes from "prop-types";
import ProductCardClient from "./CardProductClient";
import IsLoading from "../Common/IsLoading/IsLoading";

const categorias = [
  { id: "SANGUCHE", title: "Sanguches" },
  { id: "MILANESA", title: "Milanesas" },
  { id: "HAMBURGUESA", title: "Hamburguesas" },
  { id: "PIZZA", title: "Pizzas" },
  { id: "PAPA", title: "Papas" },
  { id: "GASEOSA", title: "Gaseosas" },
];

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
    return <IsLoading />;
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

  // Filtrar y renderizar productos según categoría
  return (
    <div className="mt-5">
      {categorias.map((categoria) => {
        const productosFiltrados = productos.data.filter(
          (producto) =>
            producto.categoria === categoria.id && producto.agregado === "false" && producto.habilitado === "true"
        );

        // Solo renderizar el Carousel si hay productos filtrados
        return productosFiltrados.length > 0 ? (
          <div key={categoria.id} className="text-center mt-5">
            <h2 id={categoria.id} className="text-light">
              {categoria.title}
            </h2>
            <div className="col-12">
              <Carousel
                value={productosFiltrados}
                className="col-12"
                numVisible={3}
                numScroll={1}
                orientation="horizontal"
                verticalViewPortHeight="auto"
                itemTemplate={(producto) => (
                  <div className="col-12 p-3">
                    <ProductCardClient producto={producto} key={producto.id} />
                  </div>
                )}
                responsiveOptions={responsiveOptions}
              />
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ListProductClient;
