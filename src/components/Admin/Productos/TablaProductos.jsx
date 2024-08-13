import { useQuery } from '@tanstack/react-query';

const TablaProductos = () => {
  return (
    <div className='table-responsive mt-3'>
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