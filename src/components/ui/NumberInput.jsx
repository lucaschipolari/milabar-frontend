import { useState } from "react";

const NumberInput = (props) => {
  const [value, setValue] = useState(min);

  const {
    name,
    type='number',
    min=1,
    max=10,
    label,
    error,
    className,
    register

  } = props;

  const incrementValue = () => {
    setValue((prevValue) => {
      if (prevValue < max) {
        return prevValue + 1;
      }
      return prevValue;
    });
  };

  const decrementValue = () => {
    setValue((prevValue) => {
      if (prevValue > min) {
        return prevValue - 1;
      }
      return prevValue;
    });
  };

  return (
    <div className="input-group">

      <button className="btn btn-outline-secondary" type="button" onClick={decrementValue}>
        -
      </button>
      <input
        type={type}
        className={className}
        value={value}
        min={min}
        max={max}
        onChange={(e) => setValue(parseInt(e.target.value, 10))}
      />
      <label htmlFor={`${name}-input`}>{label}</label>
      <button className="btn btn-outline-secondary" type="button" onClick={incrementValue}>
        +
      </button>
    </div>
  );
};

export default NumberInput;
