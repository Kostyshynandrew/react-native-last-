import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Form, Button, H3 } from "native-base";
import MainInput from "../../../components/MainInput";
import Icon from "react-native-vector-icons/Ionicons";
import MyLinearGradient from "../../../components/MyLinearGradient";
import { colors } from "../../../constants/Colors";
import T from "prop-types";

changePassword.propTypes = {
  handleOldPasswordChange: T.func,
  handleNewPasswordChange: T.func,
  handleConfirmPasswordChange: T.func,
  goProfileScreen: T.func,
  changePassword: T.func
};

export default function changePassword({
  handleOldPasswordChange,
  handleNewPasswordChange,
  handleConfirmPasswordChange,
  goProfileScreen,
  changePassword
}) {
  return (
    <MyLinearGradient>
      <Container style={styles.center}>
        <Form>
          <H3 style={{ marginLeft: 0 }}>Change password</H3>
          <MainInput
            onChangeText={handleOldPasswordChange}
            placeholder={"Old Password*"}
          />
          <MainInput
            onChangeText={handleNewPasswordChange}
            placeholder="New Password*"
          />
          <MainInput
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password*"
          />
          <View style={styles.bottom}>
            <Button onPress={goProfileScreen} bordered style={styles.button}>
              <Icon
                style={{ marginRight: 10 }}
                name="md-arrow-back"
                color="white"
                size={25}
              />
              <Text style={{ fontSize: 18, color: "white" }}>Settings</Text>
            </Button>
            <Button style={styles.button2} onPress={changePassword}>
              <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
            </Button>
          </View>
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center"
  },
  button: {
    borderColor: "transparent",
    padding: 10
  },
  button2: {
    borderRadius: 3,
    backgroundColor: `${colors.blue}`,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
