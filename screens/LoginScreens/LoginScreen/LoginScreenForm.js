import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Form, View, H1 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import MainInput from "../../../components/MainInput";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

Login.propTypes = {
  logInUser: T.func,
  goSignUp: T.func,
  goForgotPassword: T.func,
  handleEmailChange: T.func,
  handlePasswordChange: T.func
};

export default function Login({
  logInUser,
  goSignUp,
  goForgotPassword,
  handleEmailChange,
  handlePasswordChange
}) {
  return (
    <MyLinearGradient>
      <Container>
        <LogoImage />
        <H1>Sign In </H1>
        <Form>
          <MainInput
            placeholder="Email"
            onChangeText={email => handleEmailChange(email)}
          />
          <MainInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => handlePasswordChange(password)}
          />
          <BlueButton text="Log In" onPress={logInUser} />
          <View style={styles.bottom_menu}>
            <Text onPress={goForgotPassword} style={styles.bottom_menu_text}>
              Forgot password
            </Text>
            <Text onPress={goSignUp} style={styles.bottom_menu_text}>
              Sign up
            </Text>
          </View>
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  bottom_menu: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottom_menu_text: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10
  }
});
