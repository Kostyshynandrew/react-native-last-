import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { H3, Text, ListItem } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import T from "prop-types";

list.propTypes = {
  item: T.object,
  goBarcodeScreen: T.func,
  handleFavoriteChange: T.func
};

export default function list({ item, goBarcodeScreen, handleFavoriteChange }) {
  const starName = item.featured ? "md-star" : "md-star-outline";
  return (
    <ListItem style={styles.listItem}>
      <TouchableOpacity
        style={styles.Item}
        onPress={() => goBarcodeScreen(item)}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: `${item.img}` }} style={styles.image} />

          <Text style={styles.h2}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 15 }}>Discount {item.discount}</Text>

          <TouchableOpacity onPress={() => handleFavoriteChange(item)}>
            <Icon name={starName} color="#ffcd02" size={35} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </ListItem>
  );
}
// 007AFF
// ffcd02
const styles = StyleSheet.create({
  Item: {
    // height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listItem: {
    marginLeft: 0,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 15
  }
});
