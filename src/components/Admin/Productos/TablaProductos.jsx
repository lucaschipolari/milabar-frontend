import { useQuery } from '@tanstack/react-query';

const TablaProductos = () => {
  return (
    <div className='table-responsive mt-4 shadow-sm rounded-4 p-3'>
      <h3 className='d-flex justify-content-center align-items-center'>Productos</h3>

      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Título</th>
            <th className='text-end'>Acciones</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;