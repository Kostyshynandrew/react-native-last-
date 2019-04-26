import React from "react";
import * as firebase from "firebase";
import { connect } from "react-redux";
import NewPasswordScreenForm from "./NewPasswordScreenForm";
import validator from "validator";
import T from "prop-types";

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordconfirm: ""
    };
  }

  goLogin = () => {
    if (this.state.password.length < 6) {
      alert("password should contain more than 6 characters ");
      return;
    }
    if (!validator.equals(this.state.password, this.state.passwordconfirm)) {
      alert("password doesnt match");
      return;
    }
    this.props.navigation.navigate("LoginScreen");
  };

  handlePasswordConfirmChange = password => {
    this.setState({ password });
  };

  handlePasswordChange = passwordconfirm => {
    this.setState({ passwordconfirm });
  };

  render() {
    return (
      <NewPasswordScreenForm
        handlePasswordConfirmChange={this.handlePasswordConfirmChange}
        handlePasswordChange={this.handlePasswordChange}
        goLogin={this.goLogin}
      />
    );
  }
}

ForgotPasswordScreen.propTypes = {
  user: T.object
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  null
)(ForgotPasswordScreen);
