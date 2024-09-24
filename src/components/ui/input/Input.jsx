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
    isNumber = false,
    floatingLabel = false,
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

  if (isNumber) {
    return (
      <div className={`${className}`}>
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          type={type}
          {...register(name, options)}
          placeholder={placeholder}

          min="0"
        />
        <label htmlFor={`${name}-input`}>{label}</label>
        <div className="invalid-feedback">{error?.message}</div>
      </div>
    );
  }

  if (floatingLabel) {
    return (
      <fieldset className={`form-floating ${className}`}>
        {textarea ? (
          <textarea
            className={`form-control ${error ? "is-invalid" : ""}`}
            id={`${name}-input`}
            type={type}
            {...register(name, options)}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={handleChange}
          />
        ) : (
          <input
            className={`form-control ${error ? "is-invalid" : ""}`}
            id={`${name}-input`}
            type={type}
            {...register(name, options)}
            placeholder={placeholder}
          />
        )}
        <label htmlFor={`${name}-input`}>{label}</label>
        {textarea && maxLength && (
          <div className="text-muted text-right">
            {internalCharCount}/{maxLength}
          </div>
        )}
        <div className="invalid-feedback">{error?.message}</div>
      </fieldset>
    );
  }

  return (
    <div className={`${className}`}>
      <label className="me-2 form-label" htmlFor={`${name}-input`}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          type={type}
          {...register(name, options)}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={handleChange}
        />
      ) : (
        <input
          className={`form-control ${error ? "is-invalid" : ""}`}
          id={`${name}-input`}
          type={type}
          {...register(name, options)}
          placeholder={placeholder}
        />
      )}
      {textarea && maxLength && (
        <div className="text-muted text-right">
          {internalCharCount}/{maxLength}
        </div>
      )}
      <div className="invalid-feedback">{error?.message}</div>
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
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
  isNumber: PropTypes.bool,
  floatingLabel: PropTypes.bool,
};
