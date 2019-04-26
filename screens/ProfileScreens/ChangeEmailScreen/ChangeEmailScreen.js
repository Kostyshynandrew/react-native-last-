import React from "react";
import { connect } from "react-redux";
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  BackHandler
} from "react-native";
import ChangeEmailScreenForm from "./ChangeEmailScreenForm";
import * as firebase from "firebase";
import validator from "validator";
import { handleBackButton } from "../../../actions/userActions";
import T from "prop-types";

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: "",
      password: "",
      passwordCheck: "",
      isLoading: false
    };
  }
  componentDidMount = async () => {
    let password;
    password = (await AsyncStorage.getItem("password")) || "none";
    await this.setState({ password });
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  };

  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }

  handleNewEmailChange = newEmail => {
    this.setState({ newEmail });
  };

  handlePasswordCheckChange = passwordCheck => {
    this.setState({ passwordCheck });
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

  changeEmail = async () => {
    if (!validator.isEmail(this.state.newEmail)) {
      alert("Write real email");
      return;
    }
    if (!validator.equals(this.state.password, this.state.passwordCheck)) {
      alert("wrong password");
      return;
    }
    let user = firebase.auth().currentUser;
    await this.startLoading();
    await user
      .updateEmail(this.state.newEmail)
      .then(() => {
        alert(`email updaited to ${this.state.newEmail}`);
        AsyncStorage.setItem("email", this.state.newEmail);
      })
      .catch(function(error) {
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
      <ChangeEmailScreenForm
        handleNewEmailChange={this.handleNewEmailChange}
        handlePasswordCheckChange={this.handlePasswordCheckChange}
        goProfileScreen={this.goProfileScreen}
        changeEmail={this.changeEmail}
      />
    );
  }
}
IntroScreen.propTypes = {
  user: T.object
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  null
)(IntroScreen);
