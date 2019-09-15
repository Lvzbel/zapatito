import React from "react";

function Input({ errorMessage, id, ...props }) {
  return (
    <div className="Input">
      <label htmlFor={id}>{id.toUpperCase()}</label>
      <input {...props} id={id} />
      {errorMessage && <span className="Input__error">{errorMessage}</span>}
    </div>
  );
}

export default Input;
