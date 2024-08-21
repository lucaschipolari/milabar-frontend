import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { getProductosFn } from '../../../../api/productos';
import TablaFilaProductos from './TablaFilaProductos';

const TablaProductos = () => {
  const {
    data: productos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['productos'],
    queryFn: getProductosFn,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productos?.data?.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando datos...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger mt-3'>
        Ocurrió un error cargando la tabla de productos
      </div>
    );
  }

  if (productos && productos.data.length === 0) {
    return (
      <div className='alert alert-info mt-3'>
        No se encontraron productos para listar
      </div>
    );
  }

  return (
    <div className='table-responsive mt-4 shadow-sm rounded-4 p-3'>
      <h3 className='d-flex justify-content-center align-items-center'>Productos</h3>
      <div className="mb-3">
        <input
          id="searchInput"
          type="text"
          className="form-control"
          placeholder="Buscar en la tabla..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Habilitado</th>
            <th className='text-end'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((producto, index) => (
            <TablaFilaProductos producto={producto} index={index} key={producto.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
