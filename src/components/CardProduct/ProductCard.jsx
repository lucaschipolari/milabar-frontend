import { deleteProductoFn } from "../../api/productos";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProducto } from "../../stores/useProducto";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { producto, index } = props;

  const { setProductoToEdit } = useProducto();

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
    <div className="single__product">
      <div className="product__img">
        <img
          src="https://th.bing.com/th/id/OIP.RLnIFAPzt2ckopOOVaGe8QHaFP?rs=1&pid=ImgDetMain"
          alt={producto.nombre}
          className="w-100"
        />
      </div>

      <div className="product__content">
        <div className="rating text-center">
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
          <span>
            <i className="ri-star-s-fill"></i>
          </span>
        </div>

        <h6>{producto.nombre}</h6>
        <span className="price d-flex">
          {" "}
          <div className="d-flex mr-1">Descripcion:</div>
          <p className="d-flex text-start">{producto.descripcion}</p>
        </span>

        <div className=" d-flex align-items-center justify-content-between">
          <span className="price d-flex align-items-center">
            {" "}
            Price: <span>${producto.preciounitario}</span>
          </span>
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
  }),
  index: PropTypes.number.isRequired,
};