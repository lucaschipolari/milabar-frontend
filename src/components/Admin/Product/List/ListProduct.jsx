import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useProducto } from "../../../../stores/useProducto.js";

import { Carousel } from "primereact/carousel";

import { getProductosFn, deleteProductoFn } from "../../../../api/productos";
import ProductCard from "../CardProducto/ProductCard";
import IsLoading from "../../../Common/IsLoading/IsLoading.jsx";

const ListProduct = () => {
  const { setProductoToEdit } = useProducto();
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosFn,
  });

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

  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState(null);
  const [visible, setVisible] = useState(false);

  const queryClient = useQueryClient();

  const filteredProducts =
    productos?.data?.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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

  const handleMoreInfo = (producto) => {
    setModalData(producto);
    setVisible(true);
  };

  const handleEdit = (producto) => {
    setProductoToEdit(producto);
  };

  const handleDelete = async (producto) => {
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

  const productTemplate = (producto) => {
    return (
      <div className="col-12 p-3">
        <ProductCard
          producto={producto}
          esAdmin={true}
          handleMoreInfo={() => handleMoreInfo(producto)}
          handleEdit={() => handleEdit(producto)}
          handleDelete={() => handleDelete(producto)}
          modalData={modalData}
          visible={visible}
          setVisible={setVisible}
          isAdminPage={true}
        />
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
