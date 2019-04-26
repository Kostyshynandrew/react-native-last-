import React from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  BackHandler
} from "react-native";
import * as firebase from "firebase";
import LoginScreenForm from "./LoginScreenForm";
import { handleBackButton } from "../../../actions/userActions";
import validator from "validator";
import T from "prop-types";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    };
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }

  startLoading = () => {
    this.setState({ isLoading: true });
  };
  stopLoading = () => {
    this.setState({ isLoading: false });
  };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  saveDataToLocalStorage = async (email, password) => {
    try {
      console.log("password and email added to asyncstorage");
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
    } catch (error) {
      console.log(error.message);
    }
  };

  logInUser = async () => {
    if (!validator.isEmail(this.state.email)) {
      alert("Write real email");
      return;
    }
    if (this.state.password.length < 6) {
      alert("password should contain more than 6 characters ");
      return;
    }

    await this.startLoading();
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.saveDataToLocalStorage(this.state.email, this.state.password))
      .catch(err => {
        this.stopLoading();
        alert(err);
      });
  };

  goForgotPassword = () => {
    this.props.navigation.navigate("ForgotPasswordScreen");
  };

  goSignUp = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <LoginScreenForm
        logInUser={this.logInUser}
        goForgotPassword={this.goForgotPassword}
        goSignUp={this.goSignUp}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
      />
    );
  }
}

LoginScreen.propTypes = {};
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(LoginScreen);
