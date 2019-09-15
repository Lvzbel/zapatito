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

const nameInput = ({ input, meta }) => (
  <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const Contact = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <div className="Contact">
        <div className="Contact__content">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <Field
              name="customer_id"
              component={nameInput}
              validate={validateName}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )}
  />
);

export default Contact;
