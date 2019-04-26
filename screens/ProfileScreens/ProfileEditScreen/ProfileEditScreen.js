import React from "react";
import { connect } from "react-redux";
import ProfileEditScreenForm from "./ProfileEditScreenForm";
import * as firebase from "firebase";
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  BackHandler
} from "react-native";
import validator from "validator";
import { fetchUserInfo, handleBackButton } from "../../../actions/userActions";
import T from "prop-types";

class ProfileEditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      organization: "",
      position: "",
      isloading: false
    };
  }

  componentDidMount() {
    BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }
  handleFirstNameChange = firstName => {
    this.setState({ firstName });
  };
  handleLastNameChange = lastName => {
    this.setState({ lastName });
  };
  handleOrganizationChange = organization => {
    this.setState({ organization });
  };
  handlePositionChange = position => {
    this.setState({ position });
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

  post = async () => {
    if (validator.isEmpty(this.state.firstName)) {
      alert("fill First name field ");
      return;
    }
    if (validator.isEmpty(this.state.lastName)) {
      alert("fill Last name field ");
      return;
    }
    if (validator.isEmpty(this.state.organization)) {
      alert("fill Organization field ");
      return;
    }

    this.startLoading();
    await firebase
      .database()
      .ref(`users/${this.props.user.uid}/userInfo`)
      .set({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        organization: this.state.organization,
        position: this.state.position
      })
      .then(this.props.fetchUserInfo(this.props.user))
      .then(() => {
        alert("edited");
      })
      .catch(err => {
        console.log(err);
      });

    await this.stopLoading();
  };
  signOutUser = async () => {
    await firebase
      .auth()
      .signOut()
      .catch(e => {
        console.log(e);
      });
    await AsyncStorage.clear().catch(e => console.log(e));
    await firebase.auth().onAuthStateChanged();
    this.props.navigation.navigate("IntroScreen");
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
      <ProfileEditScreenForm
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleOrganizationChange={this.handleOrganizationChange}
        handlePositionChange={this.handlePositionChange}
        goProfileScreen={this.goProfileScreen}
        post={this.post}
        signOutUser={this.signOutUser}
      />
    );
  }
}

ProfileEditScreen.propTypes = {
  user: T.object
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = {
  fetchUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditScreen);
