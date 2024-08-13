import { useQuery } from '@tanstack/react-query';

import { getBlogsFn } from '../../api/blogs';
import AdminTableRow from './AdminTableRow';

import './Admin.css';

const TablaProductos = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogsFn,
  });

  if (isLoading) {
    return <p className='mt-3 text-center'>Cargando datos...</p>;
  }

  if (isError) {
    return (
      <div className='alert alert-danger mt-3'>
        Ocurrió un error cargando la tabla de blogs
      </div>
    );
  }

  if (blogs && blogs.data.length === 0) {
    return (
      <div className='alert alert-info mt-3'>
        No se encontraron blogs para listar
      </div>
    );
  }

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
          {blogs.data.map((blog, index) => {
            return <TablaProductosRow blog={blog} index={index} key={blog.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;