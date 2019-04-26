import React from "react";
import { connect } from "react-redux";
import * as firebase from "firebase";
import SignUpScreenForm from "./SignUpScreenForm";
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  BackHandler
} from "react-native";
import { handleBackButton } from "../../../actions/userActions";
import validator from "validator";
import T from "prop-types";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordconfirm: "",
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
  handlePasswordConfirmChange = passwordconfirm => {
    this.setState({ passwordconfirm });
  };

  goSignIn = () => {
    this.props.navigation.navigate("LoginScreen");
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

  signUpUser = async () => {
    if (!validator.isEmail(this.state.email)) {
      alert("Write real email");
      return;
    }
    if (!validator.equals(this.state.password, this.state.passwordconfirm)) {
      alert("password doesnt match");
      return;
    }
    if (this.state.password.length < 6) {
      alert("password should contain more than 6 characters ");
      return;
    }
    await this.startLoading();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        let errorMessage = error.message;
        alert(errorMessage);
        this.stopLoading();
      });
    console.log("registration done ");
    await this.saveDataToLocalStorage(this.state.email, this.state.password);
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
      <SignUpScreenForm
        goSignIn={this.goSignIn}
        signUpUser={this.signUpUser}
        handlePasswordChange={this.handlePasswordChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordConfirmChange={this.handlePasswordConfirmChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(LoginScreen);
