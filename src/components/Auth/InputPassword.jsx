
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Tooltip } from 'primereact/tooltip';
import { validatePassword } from "./validators";


const PasswordInput = ({ register, error }) => {
  const [password, setPassword] = useState('');

  const passwordRequirements = `
    La contraseña debe cumplir con los siguientes requisitos:
    - Entre 8 y 15 caracteres
    - Al menos una letra minúscula
    - Al menos una letra mayúscula
    - Al menos un número
    - Al menos un carácter especial ($@$!%*?&)
    - No debe contener espacios
  `;

  return (
    <div className="p-field">
      <label htmlFor="password">Contraseña</label>
      <span className="p-input-icon-right">
        <i
          className="pi pi-info-circle"
          data-pr-tooltip={passwordRequirements}
          data-pr-position="right"
          data-pr-at="right+5 top"
          data-pr-my="left center-2"
          style={{ cursor: 'pointer' }}
        />
        <Password
          id="password"
          {...register('password', {
            required: "La contraseña es obligatoria",
            validate: validatePassword
          })}
          toggleMask
          className={`p-password p-component p-inputwrapper ${error ? 'p-invalid' : ''}`}
          inputClassName="p-password-input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </span>
      {error && <small className="p-error">{error.message}</small>}
      <Tooltip target=".p-input-icon-right > .pi-info-circle" />
    </div>
  );
};

export default PasswordInput;
