import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import "../styles/components/GoogleAuthStyles.scss";

export class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "238761158251-l5ulh1cote6m148lfaetis5lmftq66fp.apps.googleusercontent.com",
          scope: "profile"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(
          this.auth.currentUser.get().getId(),
          this.auth.currentUser
            .get()
            .getBasicProfile()
            .getGivenName()
        )
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return (
        <button className="Auth__btn" onClick={this.onSignOutClick}>
          <i className="fas fa-sign-out-alt"></i>
          Hello {this.props.name}, Sign Out
        </button>
      );
    } else {
      return (
        <button className="Auth__btn" onClick={this.onSignInClick}>
          <i className="fas fa-sign-in-alt"></i>Sign in
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn, name: state.auth.name };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
