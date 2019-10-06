import React, { Component } from "react";
import "styles/components/ContactRedirectStyles.scss";

export class ContactRedirect extends Component {
  render() {
    return (
      <div className="ContactRedirect">
        <div className="ContactRedirect__container container">
          <h1 className="ContactRedirect__main-header">Thank you!</h1>
          <h3 className="ContactRedirect__message">
            <span className="ContactRedirect__customer">
              {this.props.match.params.customer}
            </span>
            , we will make sure to get back to you as soon as possible.
          </h3>
          <p className="ContactRedirect__note">
            You will be redirected home automatically...
          </p>
        </div>
      </div>
    );
  }
}

export default ContactRedirect;
