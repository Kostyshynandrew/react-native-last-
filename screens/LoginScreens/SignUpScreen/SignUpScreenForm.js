import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Form, View, H1 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import MainInput from "../../../components/MainInput";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

singUp.propTypes = {
  goSignIn: T.func,
  signUpUser: T.func,
  handlePasswordConfirmChange: T.func,
  handleEmailChange: T.func,
  handlePasswordChange: T.func
};

export default function singUp({
  goSignIn,
  signUpUser,
  handlePasswordConfirmChange,
  handleEmailChange,
  handlePasswordChange
}) {
  return (
    <MyLinearGradient>
      <Container>
        <LogoImage />
        <H1>Sign Up</H1>
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
          <MainInput
            placeholder="Password Confirm"
            secureTextEntry={true}
            onChangeText={password => handlePasswordConfirmChange(password)}
          />
          <BlueButton text="Log In" onPress={signUpUser} />
          <View style={styles.bottom_menu}>
            <Text onPress={goSignIn} style={styles.bottom_menu_text}>
              Sign in
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
    justifyContent: "flex-end"
  },
  bottom_menu_text: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10
  }
});
