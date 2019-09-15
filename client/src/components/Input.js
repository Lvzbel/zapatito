import React from "react";

function Input({ errorMessage, ...props }) {
  return (
    <div className="Input">
      <input {...props} />
      {errorMessage && <span className="Input__error">{errorMessage}</span>}
    </div>
  );
}

export default Input;
