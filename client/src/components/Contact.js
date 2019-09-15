import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import Input from "./Input";
import "styles/components/ContactStyles.scss";
import FormValidation from "../utils/formVerification";

const onSubmit = e => {
  console.log(e.customer_id);
};

const validateName = e => {
  const nameInput = new FormValidation("NAME");
  const result = nameInput.validate(e);
  return result.errorMessage;
};

const validatePhone = e => {
  const nameInput = new FormValidation("PHONE");
  const result = nameInput.validate(e);
  return result.errorMessage;
};

const validateEmail = e => {
  const nameInput = new FormValidation("EMAIL");
  const result = nameInput.validate(e);
  return result.errorMessage;
};

const nameInput = ({ input, meta }) => (
  <Input
    {...input}
    type="text"
    id="name"
    errorMessage={meta.touched && meta.error}
  />
);

const phoneInput = ({ input, meta }) => (
  <Input
    {...input}
    type="text"
    id="phone"
    errorMessage={meta.touched && meta.error}
  />
);

const emailInput = ({ input, meta }) => (
  <Input
    {...input}
    type="text"
    id="email"
    errorMessage={meta.touched && meta.error}
  />
);

const Contact = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <div className="Contact">
        <div className="Contact__content">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <Field name="name" component={nameInput} validate={validateName} />
            <Field
              name="phone"
              component={phoneInput}
              validate={validatePhone}
            />
            <Field
              name="email"
              component={emailInput}
              validate={validateEmail}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
  />
);

export default Contact;
