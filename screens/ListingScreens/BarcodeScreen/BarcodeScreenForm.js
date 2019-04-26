import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Button,
  H2,
  Header,
  Left,
  Text,
  Body,
  Title,
  Right
} from "native-base";
import Barcode from "react-native-barcode-builder";
import Icon from "react-native-vector-icons/Ionicons";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

barcode.propTypes = {
  goListingScreen: T.func,
  item: T.object
};

export default function barcode({ goListingScreen, item }) {
  return (
    <MyLinearGradient>
      <Container style={styles.container}>
        <Header noShadow style={styles.header}>
          <Left>
            <Button onPress={goListingScreen} bordered style={styles.button}>
              <Icon name="md-arrow-back" color="white" size={30} />
              <Text uppercase={false} style={{ color: "white" }}>
                Back
              </Text>
            </Button>
          </Left>
          {/* <Body>
            <Title>Header</Title>
          </Body> */}
          <Right>
            <Text>right</Text>
          </Right>
        </Header>
        <Body style={{ justifyContent: "space-around" }}>
          <View style={styles.top}>
            <Image source={{ uri: `${item.img}` }} style={styles.image} />
            <H2 style={styles.h2}> {item.name}</H2>
          </View>

          <View>
            <Barcode
              value={`${item.barcode}`}
              format="CODE128"
              width={3}
              height={200}
            />
            <Text style={styles.big}>{item.barcode}</Text>
          </View>
        </Body>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  header: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    height: 40
  },
  top: {
    flexDirection: "row",
    alignItems: "center"
  },
  big: {
    textAlign: "center",
    fontSize: 45,
    color: "blue"
  },
  button: {
    borderColor: "transparent",
    // color: "black",
    padding: 10
    // marginBottom: 10
  },
  image: {
    height: 90,
    width: 90
  }
});
