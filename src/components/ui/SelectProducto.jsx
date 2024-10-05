import PropTypes from 'prop-types';

const Select = (props) => {
  const {
    name,
    label,
    error,
    className = '',
    register,
    options,
    categories = [],
    placeholder = 'Seleccione una opción',
  } = props;

  return (
    <fieldset className={`form-floating ${className}`}>
      <select
        className={`form-select ${error ? 'is-invalid' : ''}`}
        id={`${name}-select`}
        {...register(name, options)}
      >
        <option value="">{placeholder}</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor={`${name}-select`}>{label}</label>
      <div className="invalid-feedback">{error?.message}</div>
    </fieldset>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
};

export default Select;
