import React, { Component } from "react";
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
          console.log("is Signed in?", this.auth.isSignedIn.get());
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn();
    console.log(
      this.auth.currentUser
        .get()
        .getBasicProfile()
        .getGivenName()
    );
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="Auth__btn" onClick={this.onSignOutClick}>
          <i class="fas fa-sign-out-alt"></i>
          Hello Sign out
        </button>
      );
    } else {
      return (
        <button className="Auth__btn" onClick={this.onSignInClick}>
          <i class="fas fa-sign-in-alt"></i>Sign in
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
