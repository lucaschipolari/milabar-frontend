import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { Button } from 'primereact/button';

import { deleteProductoFn } from "../../../../api/productos.js";
import { useProducto } from "../../../../stores/useProducto.js";
import ModalProductos from "../ModalProductos.jsx";

import "../styles/producto.css";

const TablaFilaProductos = (props) => {
  const { producto, index } = props;

  const { setProductoToEdit } = useProducto();

  const [modalData, setModalData] = useState(null);
  const [visible, setVisible] = useState(false);

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
    <>
      <tr className="row-height p-3">
        <td className="h-100 ">{index + 1}</td>
        <td className=" blue-light-color">
          <img
            alt={producto.nombre}
            className="productos-tabla-imagen img-fluid"
            src={producto.imagen}
          />
        </td>
        <td className=" blue-color">{producto.nombre}</td>
        <td className="">
          {producto.habilitado === "true" ? (
            <i className="bi bi-check-circle-fill text-success"></i>
          ) : (
            <i className="bi bi-x-circle-fill text-danger"></i>
          )}
        </td>
        <td className="row-height text-end row row-size mx-0 gap-2">
          <Button icon="pi pi-external-link"
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
            to={`/modificar-producto/${producto.id}`}
            onClick={handleEdit}
          >
            <i className="bi bi-pencil-square tamaño-icono"></i>
          </Link>
          <button className="btn btn-danger col-auto" onClick={handleDelete}>
            <i className="bi bi-trash3-fill tamaño-icono"></i>
          </button>
        </td>
      </tr>
      {modalData && (
        <ModalProductos values={modalData} visible={visible}
        onHide={() => setVisible(false)}/>
      )}
    </>
  );
};

export default TablaFilaProductos;

TablaFilaProductos.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};
