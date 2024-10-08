import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Input = (props) => {
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
    maxLength,
    onChange,
    resetCount,
    radioOptions,
    isNumber = false,
  } = props;

  const [internalCharCount, setInternalCharCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setInternalCharCount(value.length);
    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    if (textarea) {
      setInternalCharCount(
        document.getElementById(`${name}-input`)?.value.length || 0
      );
    }
  }, [name, textarea]);

  useEffect(() => {
    if (resetCount) {
      setInternalCharCount(0);
    }
  }, [resetCount]);

  if (textarea) {
    return (
      <fieldset className={`form-floating ${className}`}>
        <textarea
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          placeholder={placeholder}
          type={type}
          {...register(name, options)}
          maxLength={maxLength}
          onChange={handleChange}
        />
        <label htmlFor={`${name}-input`}>{label}</label>
        {maxLength && (
          <div className="text-muted text-right">
            {internalCharCount}/{maxLength}
          </div>
        )}
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{error?.message}</span>
        </div>
      </fieldset>
    );
  }

  if (type === "radio" && radioOptions) {
    return (
      <fieldset
        className={`mb-3 bg-white container rounded-4 border border-light ${className}`}
      >
        <legend className="fs-5">{label}</legend>
        {radioOptions.map((option, index) => (
          <div key={index} className="form-check form-check-inline">
            <input
              className={`form-check-input ${error ? "is-invalid" : ""}`}
              type="radio"
              id={`${name}-${option.value}`}
              value={option.value}
              {...register(name, options)}
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

  if (isNumber) {
    return (
      <div className={`${className}`}>
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          type={type}
          {...register(name, options)}
          placeholder={placeholder}
        />
        <label htmlFor={`${name}-input`}>{label}</label>
        <div className="invalid-feedback">
          <span className="badge text-bg-danger">{error?.message}</span>
        </div>
      </div>
    );
  }

  return (
    <fieldset className={`form-floating ${className}`}>
      <input
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={`${name}-input`}
        type={type}
        {...register(name, options)}
        placeholder={placeholder}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <div className="invalid-feedback">
        <span className="badge text-bg-danger">{error?.message}</span>
      </div>
    </fieldset>
  );
};

Input.propTypes = {
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
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  resetCount: PropTypes.bool,
  radioOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  isNumber: PropTypes.bool,
};

export default Input;
