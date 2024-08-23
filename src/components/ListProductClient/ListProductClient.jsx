import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Carousel } from "primereact/carousel";

import { getProductosFn } from "../../api/productos";
import CardProductClient from "./CardProductClient";
import "./style.css";

const ListProductClient = (props) => {
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
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(cartCount + 1);
  };
  
  const handleLike = () => {
    console.log("chau");
  };

  const handleAddCart = () => {
    incrementCart();
  };

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
      <div className="col-12 p-3">
        <CardProductClient producto={producto} esAdmin={false} handleLike={() => handleLike(producto)} handleAddCart={() => handleAddCart()}/>
      </div>
    );
  };

  return (
    <div className="col-12">
      <Carousel
        value={productos.data}
        className="col-12"
        numVisible={3} 
        numScroll={1}
        orientation="horizontal"
        verticalViewPortHeight="550px"
        itemTemplate={productTemplate}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
};

export default ListProductClient;
