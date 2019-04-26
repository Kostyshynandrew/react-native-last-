import React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Form, Button, H1, H3, Text } from "native-base";
import MainInput from "../../../components/MainInput";
import Icon from "react-native-vector-icons/Ionicons";
import MyLinearGradient from "../../../components/MyLinearGradient";
import { colors } from "../../../constants/Colors";
import T from "prop-types";

changeEmail.propTypes = {
  handleNewEmailChange: T.func,
  handlePasswordCheckChange: T.func,
  goProfileScreen: T.func,
  changeEmail: T.func
};

export default function changeEmail({
  handleNewEmailChange,
  handlePasswordCheckChange,
  goProfileScreen,
  changeEmail
}) {
  return (
    <MyLinearGradient>
      <Container style={styles.center}>
        <Form>
          <H3 style={{ marginLeft: 0 }}>Change email</H3>
          <MainInput
            onChangeText={handleNewEmailChange}
            placeholder={"New email*"}
          />
          <MainInput
            onChangeText={handlePasswordCheckChange}
            placeholder="Password*"
          />
          <View style={styles.bottom}>
            <Button
              onPress={goProfileScreen}
              white
              bordered
              style={styles.button}
            >
              <Icon
                style={{ marginRight: 10 }}
                name="md-arrow-back"
                color="white"
                size={25}
              />
              <Text uppercase={false} style={{ fontSize: 18, color: "white" }}>
                Settings
              </Text>
            </Button>
            <Button style={styles.button2} onPress={changeEmail}>
              <Text uppercase={false} style={{ color: "white", fontSize: 18 }}>
                Save
              </Text>
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
