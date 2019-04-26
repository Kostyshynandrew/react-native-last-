import React from "react";
import { connect } from "react-redux";
import BarcodeScreenForm from "./BarcodeScreenForm";
import T from "prop-types";

class BarcodeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goListingScreen = () => {
    this.props.navigation.navigate("ListingScreen");
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", "NO-ID");

    return (
      <BarcodeScreenForm goListingScreen={this.goListingScreen} item={item} />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  null
)(BarcodeScreen);
