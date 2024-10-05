import PropTypes from "prop-types";

const InputProducto = (props) => {
  const {
    name,
    type = "text",
    label,
    error,
    className = "",
    register,
    options,
    placeholder = "Ingrese un texto",
    textarea = false,
    radioOptions,
    onChange,
    disabled = false,
    maxLength,
    minLength
  } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    if (type === "radio" && (value === "true" || value === "false")) {
      onChange && onChange(name, value === "true"); 
    } else {
      onChange && onChange(name, value);
    }
  };

  if (textarea) {
    return (
      <fieldset className={`form-floating ${className}`}>
        <textarea
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          placeholder={placeholder}
          type={type}
          {...register(name, options)}
          disabled={disabled}
          onChange={handleChange}
          maxLength={maxLength}
        />
        <label htmlFor={`${name}-input`}>{label}</label>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{error?.message}</span>
        </div>
      </fieldset>
    );
  }

  if (type === "radio" && radioOptions) {
    return (
      <fieldset className={`mb-3 bg-white container rounded-4 border border-light ${className}`}>
        <legend className="fs-5">{label}</legend>
        {radioOptions.map((option, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              className={`form-check-input ${error ? "is-invalid" : ""}`}
              type="radio"
              id={`${name}-${option.value}`}
              value={option.value}
              {...register(name, options)}
              disabled={disabled}
              onChange={handleChange} 
            />
            <label
              className="form-check-label"
              htmlFor={`${name}-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
        {error && <div className="invalid-feedback">{error.message}</div>}
      </fieldset>
    );
  }

  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={`${name}-input`}
        placeholder={placeholder}
        type={type}
        {...register(name, options)}
        disabled={disabled}
        onChange={handleChange}
        maxLength={maxLength}
        minLength={minLength}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className="invalid-feedback">
        <span className="badge text-bg-danger">{error?.message}</span>
      </div>
    </fieldset>
  );
};

InputProducto.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  className: PropTypes.string,
  register: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default InputProducto;
