import React, { FC } from 'react';

interface Props {
  className: string;
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: Function;
}

const TextField: FC<Props> = ({
  className,
  label,
  type,
  id,
  value,
  onChange,
}) => (
  <div className={`mb-3 ${className}`}>
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      name={id}
      type={type}
      className="form-control"
      id={id}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e)}
      required={true}
    />
  </div>
);

export default TextField;
