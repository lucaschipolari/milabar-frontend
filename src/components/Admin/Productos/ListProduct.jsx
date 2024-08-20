import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Carousel } from "primereact/carousel";

import { getProductosFn } from "../../../api/productos";
import ProductCard from "./ProductCard";

const ListProduct = () => {
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosFn,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts =
    productos?.data?.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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

  const productTemplate = (producto) => {
    return (
      <div className="col-12">
        <ProductCard producto={producto} key={producto.id} />
      </div>
    );
  };

  return (
    <div className="mb-3">
      <input
        id="searchInput"
        type="text"
        className="form-control my-4"
        placeholder="Buscar en la lista de productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Carousel
        value={filteredProducts}
        numVisible={1}
        numScroll={1}
        orientation="horizontal"
        verticalViewPortHeight="550px"
        itemTemplate={productTemplate}
      />
    </div>
  );
};

export default ListProduct;
