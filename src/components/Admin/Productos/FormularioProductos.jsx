import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import InputProducto from '../../ui/InputProducto';
import SelectProducto from '../../ui/SelectProducto';

import { postProductoFn, putProductoFn } from '../../../api/productos.js';
import { useProducto } from '../../../stores/useProducto.js';

const FormularioProductos = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit: onSubmitRHF,
        reset,
        formState: { errors },
        setValue,
      } = useForm();

      const queryClient = useQueryClient();

      const { mutate: postProducto } = useMutation({
        mutationFn: postProductoFn,
        onSuccess: () => {
          toast.dismiss();
          toast.success('Entrada guardada');
    
          reset();

          queryClient.invalidateQueries({
            queryKey: ['productos'],
          });
        },
        onError: (e) => {
          toast.dismiss();
          toast.error(e.message);
        },
      });

      const { mutate: putProducto } = useMutation({
        mutationFn: putProductoFn,
        onSuccess: () => {
          toast.dismiss();
          toast.success('Entrada actualizada');
    
          reset();
          clearProductoToEdit();
    
          queryClient.invalidateQueries({
            queryKey: ['productos'],
          });
        },
        onError: (e) => {
          toast.dismiss();
          toast.error(e.message);
        },
      });
      const { productoToEdit, clearProductoToEdit } = useProducto();

      if (location.pathname === '/agregar-producto' && productoToEdit) {
        clearProductoToEdit();
      }

      if (productoToEdit) {
        setValue('nombre', productoToEdit.nombre);
        setValue('descripcion', productoToEdit.descripcion);
        setValue('categoria', productoToEdit.categoria);
        setValue('unidadmedida', productoToEdit.unidadmedida);
        setValue('preciounitario', productoToEdit.preciounitario);
        setValue('imagen', productoToEdit.imagen);
        setValue('habilitado', productoToEdit.habilitado);
      }

      const handleSubmit = async (data) => {
        if (productoToEdit){
          const action = await Swal.fire({
            title: 'Atención',
            icon: 'info',
            html: `¿Estás seguro que deseas editar el producto <b>"${data.nombre}"</b>?`,
            confirmButtonText: 'Si, editar',
            cancelButtonText: 'No, cancelar',
            showCancelButton: true,
          });
      
          if (action.isConfirmed) {
            toast.loading('Actualizando entrada...');
            putProducto({ productoId: productoToEdit.id, data });
            Swal.fire({
              title: 'Éxito',
              text: 'Entrada actualizada. Será redirigido a la tabla de productos',
              icon: 'success',
              timer: 4000,
              timerProgressBar: true,
              showConfirmButton: false,
              willClose: () => {
                navigate(-1);
              }
            });
          }
        } 
        else{
          const action = await Swal.fire({
            title: 'Atención',
            icon: 'info',
            html: `¿Estás seguro que deseas guardar el nuevo producto <b>"${data.nombre}"</b>?`,
            confirmButtonText: 'Si, guardar',
            cancelButtonText: 'No, cancelar',
            showCancelButton: true,
          });
      
          if (action.isConfirmed) {
            toast.loading('Guardando entrada...');
            postProducto(data);
            Swal.fire({
              title: 'Éxito',
              text: 'Entrada guardada. Será redirigido a la tabla de productos',
              icon: 'success',
              timer: 4000,
              timerProgressBar: true,
              showConfirmButton: false,
              willClose: () => {
                navigate(-1);
              }
            });
          }
        }
        reset();
      };
    
      const handleCancelEdit = () => {
        navigate(-1);
        clearProductoToEdit();
        reset();
      };
    
  return (
    <div className='p-3 bg-white rounded-4 border-light shadow-sm'>
        <h3 className='text-center'>Formulario de productos</h3>
        <form className='card p-3 bg-light' onSubmit={onSubmitRHF(handleSubmit)}>
            <h1 className='text-center'>{productoToEdit ? 'Editar producto' : 'Crear producto'}</h1>
            <hr />
            {productoToEdit && (
                <div className='alert alert-warning'>
                Atención: Estás modificando la entrada con nombre{' '}
                <b>{productoToEdit.nombre}</b>
                </div>
            )}
            <InputProducto
                className='mb-2'
                error={errors.nombre}
                label='Nombre'
                name='nombre'
                options={{
                required: 'Este campo es requerido',
                minLength: {
                    value: 5,
                    message: 'El nombre debe tener al menos 5 caracteres',
                },
                maxLength: {
                    value: 100,
                    message: 'El nombre debe tener como mucho 100 caracteres',
                },
                }}
                placeholder='Milanesa'
                register={register}
            />
            <InputProducto
                textarea
                className='mb-3'
                error={errors.descripcion}
                label='Descripcion'
                name='descripcion'
                options={{
                required: 'Este campo es requerido',
                minLength: {
                    value: 5,
                    message: 'La descripción debe tener al menos 5 caracteres',
                },
                maxLength: {
                    value: 500,
                    message: 'La descripción debe tener como mucho 500 caracteres',
                },
                }}
                placeholder='Descripción del producto'
                register={register}
            />
            <SelectProducto 
              className='mb-3'
              error={errors.categoria}
              name='categoria'
              label='Categoria del producto'
              categories= {["SANGUCHE", "GASEOSA", "ACOMPAÑAMIENTO", "ADEREZO"]}
              options={{
              required: 'Este campo es requerido',
              }}
              register={register}
            />
            <div className='row'>
              <SelectProducto
                className='mb-3 col-6'
                error={errors.unidadmedida}
                name='unidadmedida'
                label='Unidad de medida del producto'
                categories= {["KG", "GR", "500 ML", "700 ML", "RODAJA", "FETA", "UNIDAD", "INDEFINIDO"]}
                options={{
                required: 'Este campo es requerido',
                }}
                register={register}
              />
              <InputProducto
                className='mb-3 col-6'
                type='number'
                error={errors.preciounitario}
                label='Precio unitario'
                name='preciounitario'
                options={{
                  required: 'Este campo es requerido',
                }}
                register={register}
              />
            </div>
            <InputProducto
                className='mb-2'
                error={errors.imagen}
                label='Imagen'
                name='imagen'
                options={{
                required: 'Este campo es requerido',
                minLength: {
                    value: 5,
                    message: 'El enlace a la imagen debe tener al menos 5 caracteres',
                },
                pattern: {
                    value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                    message:
                    'El enlace ingresado no es válido, debe ser una URL válida',
                },
                }}
                placeholder='https://google.com'
                register={register}
            />
            <div className="form-group">
          <label>Está habilitado</label>
          <div className="form-check">
            <input
              className={`form-check-input ${errors.habilitado ? 'is-invalid' : ''}`}
              type="radio"
              name="habilitado"
              id="habilitado-si"
              value="si"
              {...register('habilitado', { required: 'Este campo es requerido' })}
            />
            <label className="form-check-label" htmlFor="habilitado-si">
              Sí
            </label>
          </div>
          <div className="form-check">
            <input
              className={`form-check-input ${errors.habilitado ? 'is-invalid' : ''}`}
              type="radio"
              name="habilitado"
              id="habilitado-no"
              value="no"
              {...register('habilitado', { required: 'Este campo es requerido' })}
            />
            <label className="form-check-label" htmlFor="habilitado-no">
              No
            </label>
          </div>
          {errors.habilitado && (
            <div className="invalid-feedback d-block">
              <span className="badge text-bg-danger">{errors.habilitado.message}</span>
            </div>
          )}
        </div>
        <hr />
                <div className='text-end'>
                    {productoToEdit && (
                    <button className='btn' type='button' onClick={handleCancelEdit}>
                        Cancelar edición
                    </button>
                    )}
                    <button className='btn btn-danger' type='submit'>
                    Guardar
                    </button>
                </div>
        </form>
    </div>
  )
}
export default FormularioProductos