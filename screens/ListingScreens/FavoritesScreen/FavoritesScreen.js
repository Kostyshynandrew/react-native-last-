import React from "react";
import { connect } from "react-redux";
import FavoritesScreenForm from "./FavoritesScreenForm";
import {
  changeFavoriteItemsKeys,
  changeFavoriteItems,
  handleClickIcon,
  sendFavoriteItemsKeys
} from "../../../actions/userActions";
import T from "prop-types";

class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goBarcodeScreen = item => {
    this.props.navigation.navigate("BarcodeScreen", {
      item: item
    });
  };

  handleFavoriteChange = async item => {
    await this.props.handleClickIcon(item);
    await this.props.sendFavoriteItemsKeys(
      this.props.favoriteItemsKeys,
      this.props.user.uid
    );
  };
  render() {
    return (
      <FavoritesScreenForm
        favoriteItems={this.props.favoriteItems}
        handleFavoriteChange={this.handleFavoriteChange}
        goBarcodeScreen={this.goBarcodeScreen}
      />
    );
  }
}

FavoritesScreen.propTypes = {
  user: T.object,
  favoriteItemsKeys: T.array,
  favoriteItems: T.array,
  lastItem: T.string
};

const mapStateToProps = state => ({
  user: state.user.user,
  favoriteItemsKeys: state.user.favoriteItemsKeys,
  favoriteItems: state.user.favoriteItems
});
const mapDispatchToProps = {
  changeFavoriteItemsKeys,
  changeFavoriteItems,
  handleClickIcon,
  sendFavoriteItemsKeys
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesScreen);
