import React from "react";
import * as firebase from "firebase";
import { connect } from "react-redux";
import SignUpConfirmScreenForm from "./SignUpConfirmScreenForm";

class SignUpConfirmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email1: "",
      email2: "",
      email3: "",
      email4: "",
      email5: ""
    };
  }
  handleChange1 = email1 => {
    this.setState({ email1 });
  };
  handleChange1 = email2 => {
    this.setState({ email2 });
  };
  handleChange1 = email3 => {
    this.setState({ email3 });
  };
  handleChange1 = email4 => {
    this.setState({ email4 });
  };
  handleChange1 = email5 => {
    this.setState({ email5 });
  };
  goNewPassword = () => {
    this.props.navigation.navigate("NewPasswordScreen");
  };

  render() {
    return (
      <SignUpConfirmScreenForm
        handleChange1={this.handleChange1}
        handleChange2={this.handleChange2}
        handleChange3={this.handleChange3}
        handleChange4={this.handleChange4}
        handleChange5={this.handleChange5}
        goNewPassword={this.goNewPassword}
      />
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  null
)(SignUpConfirmScreen);
