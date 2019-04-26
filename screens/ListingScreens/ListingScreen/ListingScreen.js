import React from "react";
import { connect } from "react-redux";
import ListingScreenForm from "./ListingScreenForm";
import { BackHandler, ActivityIndicator, View } from "react-native";
import {
  fetchItems,
  handleBackButton,
  fetchFavoriteItemsKeys,
  fetchFavoriteItems,
  changeInitialFeatured,
  handleClickIcon,
  sendFavoriteItemsKeys
} from "../../../actions/userActions";
import T from "prop-types";

class ListingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount = async () => {
    await this.props.fetchItems(); // fetch all product items
    await this.props.fetchFavoriteItemsKeys(this.props.user.uid); // fetch all favorite items keys
    await this.props.changeInitialFeatured(
      this.props.items,
      this.props.favoriteItemsKeys
    );
    await this.stopLoading();
    // change star color if item is in favorite list
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
  };

  startLoading = () => {
    this.setState({ isLoading: true });
  };
  stopLoading = () => {
    this.setState({ isLoading: false });
  };
  goBarcodeScreen = item => {
    this.props.navigation.navigate("BarcodeScreen", {
      item: item
    });
  };

  // Fetch new items on scroll down
  fetchNewItems = async () => {
    if (this.props.lastItem) {
      await this.props.fetchItems(this.props.lastItem, this.props.items);
      await this.props.changeInitialFeatured(
        this.props.items,
        this.props.favoriteItemsKeys
      );
    } else {
      alert(" no more new items");
    }
  };

  // change feauttured/favoritelist/favoriteKeys
  handleFavoriteChange = async item => {
    await this.props.handleClickIcon(item);
    await this.props.sendFavoriteItemsKeys(
      this.props.favoriteItemsKeys,
      this.props.user.uid
    );
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
      <ListingScreenForm
        items={this.props.items}
        goBarcodeScreen={this.goBarcodeScreen}
        handleFavoriteChange={this.handleFavoriteChange}
      />
    );
  }
}

ListingScreen.propTypes = {
  user: T.object,
  items: T.array,
  favoriteItemsKeys: T.array,
  lastItem: T.string
};

const mapStateToProps = state => ({
  user: state.user.user,
  items: state.user.items,
  favoriteItemsKeys: state.user.favoriteItemsKeys,
  lastItem: state.user.lastItem
});

const mapDispatchToProps = {
  fetchItems,
  fetchFavoriteItemsKeys,
  fetchFavoriteItems,
  handleClickIcon,
  sendFavoriteItemsKeys,
  changeInitialFeatured
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingScreen);
