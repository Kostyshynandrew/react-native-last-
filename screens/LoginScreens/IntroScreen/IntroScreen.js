import React from "react";
import { connect } from "react-redux";
import IntroScreenForm from "./IntroScreenForm";
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  BackHandler
} from "react-native";
import * as firebase from "firebase";
import {
  addUserLocal,
  stopLoading,
  handleBackButton,
  fetchUserInfo
} from "../../../actions/userActions";
import { Font } from "expo";
import T from "prop-types";

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount = async () => {
    await this._loadFontsAsync();
    await this.getUserData();
    await this.checkIfLoggedIn();
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }

  _loadFontsAsync = async () => {
    await Font.loadAsync({
      Helvetica: require("../../../assets/fonts/Helvetica.ttf")
    });
  };
  stopLoading = () => {
    this.setState({ isLoading: false });
  };

  // try to get password and email from asyncstorage
  getUserData = async () => {
    let email = "";
    let password = "";
    try {
      email = (await AsyncStorage.getItem("email")) || "none";
      password = (await AsyncStorage.getItem("password")) || "none";
    } catch (error) {
      console.log(error.message);
    }

    if (!(email === "none") && !(password === "none")) {
      console.log("begin login");
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("no data at async storage");
    }
  };

  // check if user logged in
  checkIfLoggedIn = async () => {
    firebase.auth().onAuthStateChanged(async user => {
      console.log("chekcing user");
      if (user) {
        await this.props.fetchUserInfo(user);
        this.props.navigation.navigate("WelcomeScreen");
      } else {
        console.log("no user");
        this.stopLoading();
      }
      console.log("done chekcing user");
    });
  };

  goLogIn = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  goSignIn = () => {
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
    return <IntroScreenForm goLogIn={this.goLogIn} goSignIn={this.goSignIn} />;
  }
}

IntroScreen.propTypes = {
  user: T.object,
  userInfo: T.object
};

const mapStateToProps = state => ({
  user: state.user.user,
  userInfo: state.user.userInfo
});
const mapDispatchToProps = {
  addUserLocal,
  fetchUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScreen);
