import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import InputProducto from '../../ui/InputProducto';
import SelectProducto from '../../ui/SelectProducto';

import { postProductoFn, putProductoFn } from '../../../api/productos.js';
import { useProducto } from '../../../stores/useProducto.js';

const FormularioProductos = () => {
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

      if (productoToEdit) {
      }

      const handleSubmit = (data) => {
        toast.loading('Guardando... Aguarde');
    
        if (productoToEdit) putProducto({ productoId: productoToEdit.id, data });
        else postProducto(data);
      };
    
      const handleCancelEdit = () => {
        clearProductoToEdit();
        reset();
      };
    
  return (
    <div className='p-3 bg-white rounded-4 border-light shadow-sm'>
        <h3 className='text-center'>Formulario de productos</h3>
        <form className='card p-3 bg-light' onSubmit={onSubmitRHF(handleSubmit)}>
            <h1>Crear nueva entrada</h1>
            <hr />
            {productoToEdit && (
                <div className='alert alert-warning'>
                Atención: Estás modificando la entrada con título{' '}
                <b>{productoToEdit.title}</b>
                </div>
            )}
            <InputProducto
                className='mb-2'
                error={errors.name}
                label='Nombre'
                name='name'
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
                error={errors.description}
                label='Descripcion'
                name='description'
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
              error={errors.category}
              name='category'
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
                error={errors.imageUrl}
                label='Imagen'
                name='imageUrl'
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