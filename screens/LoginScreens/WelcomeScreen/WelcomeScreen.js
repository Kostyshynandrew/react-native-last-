import React from "react";
import { connect } from "react-redux";
import { View, BackHandler, ActivityIndicator } from "react-native";
import WelcomeScreenForm from "./WelcomeScreenForm";
import { fetchUserInfo, handleBackButton } from "../../../actions/userActions";
import T from "prop-types";

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount = async () => {
    await this.directToPage();
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  };
  componentWillUnmount() {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  }

  startLoading = () => {
    this.setState({ isLoading: true });
  };
  stopLoading = () => {
    this.setState({ isLoading: false });
  };

  directToPage = async () => {
    console.log(this.props.userInfo);
    if (this.props.userInfo === null) {
      this.stopLoading();
      return;
    } else {
      this.props.navigation.navigate("ProfileBottomTabNavigatior");
      this.stopLoading();
    }
  };

  goProfileFillingScreen = () => {
    this.props.navigation.navigate("ProfileFillingScreen");
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
      <WelcomeScreenForm goProfileFillingScreen={this.goProfileFillingScreen} />
    );
  }
}

WelcomeScreen.propTypes = {
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
)(WelcomeScreen);
