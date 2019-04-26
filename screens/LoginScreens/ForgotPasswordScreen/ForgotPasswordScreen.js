import React from "react";
import * as firebase from "firebase";
import { connect } from "react-redux";
import ForgotPasswordScreenForm from "./ForgotPasswordScreenForm";
import { BackHandler } from "react-native";
import { handleBackButton } from "../../../actions/userActions";
import validator from "validator";
import T from "prop-types";

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  componentDidMount() {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }
  handleEmailChange = email => {
    this.setState({ email });
  };

  resetPassword = () => {
    if (!validator.isEmail(this.state.email)) {
      alert("Write real email");
      return;
    }
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        this.props.navigation.navigate("LoginScreen");
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <ForgotPasswordScreenForm
        handleEmailChange={this.handleEmailChange}
        resetPassword={this.resetPassword}
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
