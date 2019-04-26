import React from "react";
import { connect } from "react-redux";
import ProfileScreenForm from "./ProfileScreenForm";
import T from "prop-types";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  goProfileEditScreen = () => {
    this.props.navigation.navigate("ProfileEditScreen");
  };
  goChangeEmailScreen = () => {
    this.props.navigation.navigate("ChangeEmailScreen");
  };
  goChangePasswordScreen = () => {
    this.props.navigation.navigate("ChangePasswordScreen");
  };

  render() {
    return (
      <ProfileScreenForm
        goProfileEditScreen={this.goProfileEditScreen}
        goChangeEmailScreen={this.goChangeEmailScreen}
        goChangePasswordScreen={this.goChangePasswordScreen}
        userInfo={this.props.userInfo}
      />
    );
  }
}
ProfileScreen.propTypes = {
  user: T.object,
  userInfo: T.object
};

const mapStateToProps = state => ({
  user: state.user.user,
  userInfo: state.user.userInfo
});

export default connect(
  mapStateToProps,
  null
)(ProfileScreen);
