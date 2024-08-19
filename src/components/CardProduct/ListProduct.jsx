// import { useQuery } from "@tanstack/react-query";
// import "./styles.css";
// import { getProductosFn } from "../../api/productos";
// import ProductCard from "./ProductCard";

// import { Carousel } from "primereact/carousel";

// const ListProduct = () => {
//   const {
//     data: productos,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["productos"],
//     queryFn: getProductosFn,
//   });

//   if (isLoading) {
//     return <p className="mt-3 text-center">Cargando datos...</p>;
//   }

//   if (isError) {
//     return (
//       <div className="alert alert-danger mt-3">
//         Ocurrió un error cargando la tabla de productos
//       </div>
//     );
//   }

//   if (productos && productos.data.length === 0) {
//     return (
//       <div className="alert alert-info mt-3">
//         No se encontraron productos para listar
//       </div>
//     );
//   }
//   return (
//     <div className="container">
//       <h3 className="d-flex justify-content-center align-items-center">
//         Productos
//       </h3>

//       {productos.data.map((producto, index) => {
//         return (
//           <ProductCard producto={producto} index={index} key={producto.id} />
//         );
//       })}
//     </div>
//   );
// };

// export default ListProduct;

import "./styles.css";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "./ProductService";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProductosFn } from "../../api/productos";

export default function BasicDemo() {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (producto) => {
    switch (producto.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosFn,
  });

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

  // useEffect(() => {
  //   ProductService.getProductsSmall().then((data) =>
  //     setProducts(data.slice(0, 9))
  //   );
  // }, []);

  const productTemplate = (producto) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <ProductCard producto={producto} />
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={productos.data}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
