import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Form, Button, H3, H2, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../../constants/Colors";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

profile.propTypes = {
  goProfileEditScreen: T.func,
  goChangeEmailScreen: T.func,
  goChangePasswordScreen: T.func,
  userInfo: T.object
};

export default function profile({
  goProfileEditScreen,
  goChangeEmailScreen,
  goChangePasswordScreen,
  userInfo
}) {
  const {
    firstName = "FirstName",
    lastName = "LastName",
    position = "Position",
    organization = "Organization"
  } = userInfo;

  return (
    <MyLinearGradient>
      <Container style={styles.container}>
        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <View>
            <View style={styles.row}>
              <H3 style={{ marginLeft: 0 }}>Profile</H3>
              <Button
                onPress={goProfileEditScreen}
                bordered
                style={styles.button}
              >
                <Icon
                  style={{ marginRight: 10 }}
                  name="md-create"
                  color={"black"}
                  size={24}
                />
                <H3 style={{ color: "black" }}>Edit</H3>
              </Button>
            </View>

            <View style={{ flexDirection: "row", margin: 15 }}>
              <View style={styles.test}>
                <Text style={styles.left}>FIRST NAME:</Text>
                <Text style={styles.left}>LAST NAME:</Text>
                <Text style={styles.left}>ORGANIZATION:</Text>
                <Text style={styles.left}>POSITION:</Text>
              </View>
              <View style={styles.test}>
                <Text style={styles.right}>{firstName}</Text>
                <Text style={styles.right}>{lastName}</Text>
                <Text style={styles.right}>{organization}</Text>
                <Text style={styles.right}>{position}</Text>
              </View>
              {/* <View style={styles.row}>
                <Text style={styles.left}>ORGANIZATION:</Text>
                <Text style={styles.right}>{organization}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.left}>POSITION:</Text>
                <Text style={styles.right}>{position}</Text>
              </View> */}
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={[styles.row, styles.main]}
              onPress={goChangeEmailScreen}
            >
              <View style={{ alignItems: "center", width: 60 }}>
                <Icon
                  name="md-mail-open"
                  style={{ color: "#227ED3" }}
                  size={50}
                />
              </View>
              <View style={styles.menu}>
                <H3>Change email</H3>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.row, styles.main]}
              onPress={goChangePasswordScreen}
            >
              <View style={{ alignItems: "center", width: 60 }}>
                <Icon style={{ color: "#227ED3" }} name="md-key" size={50} />
              </View>
              <View style={styles.menu}>
                <H3>Change password</H3>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <View style={{ alignItems: "center", width: 60 }}>
                <Icon style={{ color: "#227ED3" }} name="md-menu" size={50} />
              </View>
              <View style={styles.menu}>
                <H3>Billing information</H3>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0
  },
  button: {
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "transparent",
    color: "black",
    padding: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  menu: {
    width: "70%"
  },
  left: {
    margin: 5
    // width: "55%"
    // color: "#999999"
  },
  right: {
    margin: 5
    // width: "45%"
    // color: "#666666"
  },
  main: {
    borderColor: "#c9c9c9",
    borderBottomWidth: 2
  }
});
