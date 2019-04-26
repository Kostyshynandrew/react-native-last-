import React from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import * as firebase from "firebase";
import ProfileFillingScreenForm from "./ProfileFillingScreenForm";
import { handleBackButton, fetchUserInfo } from "../../../actions/userActions";
import validator from "validator";
import T from "prop-types";

class ProfileFillingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      organization: "",
      position: "",
      isLoading: false
    };
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
    await this.startLoading();
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
        alert("Personal information saved");
        this.props.navigation.navigate("ProfileBottomTabNavigatior");
      })
      .catch(err => {
        console.log(err);
        this.stopLoading();
      });
  };

  render() {
    if (this.state.isloading === true) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <ProfileFillingScreenForm
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleOrganizationChange={this.handleOrganizationChange}
        handlePositionChange={this.handlePositionChange}
        post={this.post}
      />
    );
  }
}

ProfileFillingScreen.propTypes = {
  user: T.object,
  userInfo: T.object
};

const mapStateToProps = state => ({
  user: state.user.user,
  userInfo: state.user.userInfo
});

const mapDispatchToProps = {
  fetchUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFillingScreen);
