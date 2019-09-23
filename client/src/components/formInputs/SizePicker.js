import React, { Component } from "react";
import "styles/components/formInputs/SizePicker.scss";

export class SizePicker extends Component {
  render() {
    return (
      <div className="SizePicker">
        <div className="SizePicker__container">
          <label htmlFor="size" className="SizePicker__label">
            Select Size
          </label>
        </div>
        <div className="SizePicker__options">
          <input
            className="SizePicker__radio"
            type="radio"
            name="size"
            id="xl"
          />
          <label htmlFor="xl" className="SizePicker__option">
            xl
          </label>
          <input
            className="SizePicker__radio"
            type="radio"
            name="size"
            id="md"
          />
          <label htmlFor="md" className="SizePicker__option">
            MD
          </label>
          <input
            className="SizePicker__radio"
            type="radio"
            name="size"
            id="ms"
          />
          <label htmlFor="ms" className="SizePicker__option">
            SM
          </label>
          <input
            className="SizePicker__radio"
            type="radio"
            name="size"
            id="xs"
          />
          <label htmlFor="xs" className="SizePicker__option">
            XS
          </label>
        </div>
      </div>
    );
  }
}

export default SizePicker;
