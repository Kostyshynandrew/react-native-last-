import React from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  BackHandler
} from "react-native";
import ChangePasswordScreenForm from "./ChangePasswordScreenForm";
import * as firebase from "firebase";
import validator from "validator";
import { handleBackButton } from "../../../actions/userActions";
import T from "prop-types";

class ChangePasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realPassword: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      isLoading: false
    };
  }
  componentDidMount = async () => {
    let realPassword;
    realPassword = (await AsyncStorage.getItem("password")) || "none";
    await this.setState({ realPassword });
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  };
  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }

  handleOldPasswordChange = oldPassword => {
    this.setState({ oldPassword });
  };
  handleNewPasswordChange = newPassword => {
    this.setState({ newPassword });
  };
  handleConfirmPasswordChange = confirmPassword => {
    this.setState({ confirmPassword });
  };

  startLoading = () => {
    this.setState({ isLoading: true });
  };
  stopLoading = () => {
    this.setState({ isLoading: false });
  };
  goProfileScreen = () => {
    this.props.navigation.navigate("ProfileScreen");
  };

  changePassword = async () => {
    let user = firebase.auth().currentUser;
    if (this.state.newPassword.length < 6) {
      alert("new password should contain more than 6 characters ");
      return;
    }
    if (!validator.equals(this.state.newPassword, this.state.confirmPassword)) {
      alert("password doesnt match");
      return;
    }
    if (!validator.equals(this.state.oldPassword, this.state.realPassword)) {
      alert("wrong old password");
      return;
    }
    await this.startLoading();
    await user
      .updatePassword(this.state.newPassword)
      .then(() => {
        alert(`password updaited`);
        AsyncStorage.setItem("password", this.state.newPassword);
      })
      .catch(error => {
        alert(`${error} `);
      });

    await this.stopLoading();
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
      <ChangePasswordScreenForm
        handleOldPasswordChange={this.handleOldPasswordChange}
        handleNewPasswordChange={this.handleNewPasswordChange}
        handleConfirmPasswordChange={this.handleConfirmPasswordChange}
        goProfileScreen={this.goProfileScreen}
        changePassword={this.changePassword}
      />
    );
  }
}
ChangePasswordScreen.propTypes = {
  user: T.object
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  null
)(ChangePasswordScreen);
