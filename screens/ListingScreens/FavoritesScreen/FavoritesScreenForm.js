import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Container, H3 } from "native-base";
import MainItem from "../../../components/MainItem";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

favorit.propTypes = {
  favoriteItems: T.array,
  handleFeaturedChange: T.func,
  goBarcodeScreen: T.func
};

export default function favorit({
  favoriteItems,
  handleFavoriteChange,
  goBarcodeScreen
}) {
  return (
    <MyLinearGradient>
      <Container style={styles.container}>
        <H3 style={{ marginLeft: 10 }}>Organizations</H3>
        <FlatList
          data={favoriteItems}
          extraData={this.props}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <MainItem
              item={item}
              goBarcodeScreen={goBarcodeScreen}
              handleFavoriteChange={handleFavoriteChange}
            />
          )}
        />
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 10
  },
  mainContent: {
    flex: 1,
    marginRight: 5
  },
  h2: {
    fontFamily: "Helvetica",
    fontSize: 20,
    marginBottom: 10
  }
});
