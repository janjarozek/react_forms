import React from "react";

import "../generalElements.css";

export default function Input({
  cssClassName,
  type,
  register,
  value,
  label,
  placeholder,
  handleOnChange,
  required
}) {
  return (
    <>
      <input
        className={cssClassName}
        type={type}
        name={register}
        id={value}
        value={value}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
      ></input>
      {label && <label for={value}>
        {label}
        </label>}
    </>
  );
}
