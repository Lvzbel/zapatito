import React, { Component } from "react";
import "styles/components/formInputs/SizePicker.scss";

export class SizePicker extends Component {
  renderSizeOptions = () => {
    const sizes = {
      shirts: ["xl", "md", "sm", "xs"],
      pants: ["30", "32", "34", "36", "38", "40"],
      shoes: ["6", "7", "8", "9", "10", "11", "12"],
      shorts: ["30", "32", "34", "36", "38", "40"]
    };

    return sizes[this.props.category].map(size => {
      return (
        <React.Fragment key={size}>
          <input
            className="SizePicker__radio"
            type="radio"
            name="size"
            id={size}
            onClick={() => this.setSize(size)}
          />
          <label htmlFor={size} className="SizePicker__option">
            {size.toUpperCase()}
          </label>
        </React.Fragment>
      );
    });
  };

  setSize = value => {
    this.props.action(value);
  };
  render() {
    return (
      <div className="SizePicker">
        <div className="SizePicker__container">
          <label htmlFor="size" className="SizePicker__label">
            Select Size
          </label>
        </div>
        <div className="SizePicker__options">{this.renderSizeOptions()}</div>
      </div>
    );
  }
}

export default SizePicker;
