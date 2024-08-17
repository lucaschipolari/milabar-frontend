import PropTypes from 'prop-types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

import { deleteProductoFn } from '../../../api/productos.js';
import { useProducto } from '../../../stores/useProducto.js';

import './styles/producto.css';

const TablaFilaProductos = (props) => {
  const { producto, index } = props;

  const { setProductoToEdit } = useProducto();

  const queryClient = useQueryClient();

  const { mutate: deleteProducto } = useMutation({
    mutationFn: deleteProductoFn,
    onSuccess: () => {
      toast.dismiss();
      toast.success('Entrada eliminada');

      queryClient.invalidateQueries({
        queryKey: ['productos'],
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
      title: 'Atención',
      icon: 'info',
      html: `¿Estás seguro que deseas eliminar el producto <b>"${producto.nombre}"</b>?`,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      showCancelButton: true,
    });

    if (action.isConfirmed) {
      toast.loading('Eliminando entrada...');
      deleteProducto(producto.id);
    }
  };

  return (
    <tr>
      <td className='row-height'>{index + 1}</td>
      <td>
        <img
          alt={producto.nombre}
          className='productos-tabla-imagen img-fluid'
          src={producto.imagen}
        />
      </td>
      <td>{producto.nombre}</td>
      <td className='text-end row row-size gap-2'>
        <Link className='btn btn-warning col-auto' to={`/detalle/${producto.id}`} onClick={handleEdit}>
            <i className="bi bi-pencil-square tamaño-icono"></i>
        </Link>
        <button className='btn btn-danger col-auto' onClick={handleDelete}>
            <i className="bi bi-trash3-fill tamaño-icono"></i>
        </button>
      </td>

    </tr>
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