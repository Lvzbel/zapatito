import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Input from "./Input";
import "styles/components/ContactStyles.scss";
import FormValidation from "../utils/formVerification";

class Contact extends Component {
  onSubmit = e => {
    console.log(e);
    this.props.history.push("/");
  };

  validateName = e => {
    const nameInput = new FormValidation("NAME");
    const result = nameInput.validate(e);
    return result.errorMessage;
  };

  validatePhone = e => {
    const nameInput = new FormValidation("PHONE");
    const result = nameInput.validate(e);
    return result.errorMessage;
  };

  validateEmail = e => {
    const nameInput = new FormValidation("EMAIL");
    const result = nameInput.validate(e);
    return result.errorMessage;
  };

  nameInput = ({ input, meta }) => (
    <Input
      {...input}
      type="text"
      id="name"
      errorMessage={meta.touched && meta.error}
    />
  );

  phoneInput = ({ input, meta }) => (
    <Input
      {...input}
      type="text"
      id="phone"
      errorMessage={meta.touched && meta.error}
    />
  );

  emailInput = ({ input, meta }) => (
    <Input
      {...input}
      type="text"
      id="email"
      errorMessage={meta.touched && meta.error}
    />
  );

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({ handleSubmit }) => (
          <div
            className="Contact"
            data-aos-duration="1000"
            data-aos="fade-down"
          >
            <div className="Contact__box">
              <h2 className="Contact__header">Contact Us</h2>
              <div className="Contact__content">
                <form className="Contact__form" onSubmit={handleSubmit}>
                  <Field
                    name="name"
                    component={this.nameInput}
                    validate={this.validateName}
                  />
                  <Field
                    name="phone"
                    component={this.phoneInput}
                    validate={this.validatePhone}
                  />
                  <Field
                    name="email"
                    component={this.emailInput}
                    validate={this.validateEmail}
                  />
                  <button className="btn btn__tertiary" type="submit">
                    Submit
                  </button>
                </form>

                <div className="Contact__info">
                  <p className="Contact__message">
                    Facere minima tempore rem quo necessitatibus culpa minus
                    recusandae!
                  </p>
                  <ul className="Contact__list">
                    <li className="Contact__item">
                      <i className="fas fa-caret-right"></i>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </li>
                    <li className="Contact__item">
                      <i className="fas fa-caret-right"></i>
                      Perspiciatis, fuga ratione enim natus iusto possimus.
                    </li>
                    <li className="Contact__item">
                      <i className="fas fa-caret-right"></i>
                      Autem dicta, accusantium id incidunt quis alias modi.
                    </li>
                    <li className="Contact__item">
                      <i className="fas fa-caret-right"></i>
                      Sit amet consectetur adipisicing elit.
                    </li>
                    <li className="Contact__item">
                      <i className="fas fa-caret-right"></i>
                      Esciunt eum nemo rem maxime enim.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default Contact;
