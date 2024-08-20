import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from "primereact/button";

import { deleteProductoFn } from "../../../api/productos.js";
import { useProducto } from "../../../stores/useProducto.js";
import ModalProductos from "./ModalProductos.jsx";

import "./styles/producto.css";

const ProductCard = (props) => {
  const { producto } = props;

  const { setProductoToEdit } = useProducto();

  const [modalData, setModalData] = useState(null);

  const queryClient = useQueryClient();

  const { mutate: deleteProducto } = useMutation({
    mutationFn: deleteProductoFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success("Entrada eliminada");

      queryClient.invalidateQueries({
        queryKey: ["productos"],
      });
    },
    onError: (e) => {
      toast.dismiss();
      toast.error(e.message);
    },
  });

  const handleMoreInfo = () => {
    setModalData(producto);
    setVisible(true);
  };

  const handleEdit = () => {
    setProductoToEdit(producto);
  };

  const handleDelete = async () => {
    const action = await Swal.fire({
      title: "Atención",
      icon: "info",
      html: `¿Estás seguro que deseas eliminar el producto <b>"${producto.nombre}"</b>?`,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, cancelar",
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      toast.loading("Eliminando entrada...");
      deleteProducto(producto.id);
    }
  };
  return (
    <div className="card single__product p-3 mb-3 rounded-5">
      <div className="product__img mb-3 d-flex justify-content-center align-items-center">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="h-100 img-fluid"
        />
      </div>
      <div className="product__content">
        <h6 className="text-center mb-2">{producto.nombre}</h6>
        <span className="d-flex justify-content-between">
          <p className="text-start">{producto.descripcion}</p>
        </span>
        <div className="d-flex align-items-center justify-content-between mb-1">
          <span className="price d-flex align-items-center">
            Precio: <span className="ml-1">${producto.preciounitario}</span>
          </span>
        </div>
        <hr/>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            icon="pi pi-external-link"
            className="btn btn-primary col-auto"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              handleMoreInfo();
            }}
          >
            <i className="bi bi-plus-circle tamaño-icono"></i>
          </Button>
          <Link
            className="btn btn-warning col-auto"
            to={`/detalle/${producto.id}`}
            onClick={handleEdit}
          >
            <i className="bi bi-pencil-square tamaño-icono"></i>
          </Link>
          <button className="btn btn-danger col-auto" onClick={handleDelete}>
            <i className="bi bi-trash3-fill tamaño-icono"></i>
          </button>
        </div>
      </div>
      {modalData && (
        <ModalProductos values={modalData} onClose={() => setModalData(null)} />
      )}
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    preciounitario: PropTypes.number.isRequired,
  }).isRequired,
};
