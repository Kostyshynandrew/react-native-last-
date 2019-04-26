import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Form, H1 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import MainInput from "../../../components/MainInput";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

newPassword.propTypes = {
  goLogin: T.func,
  handlePasswordChange: T.func,
  handlePasswordConfirmChange: T.func
};

export default function newPassword({
  goLogin,
  handlePasswordChange,
  handlePasswordConfirmChange
}) {
  return (
    <MyLinearGradient>
      <Container>
        <LogoImage />
        <H1>Password re-new</H1>
        <Form>
          <MainInput
            placeholder="Password"
            onChangeText={password => handlePasswordChange(password)}
          />
          <MainInput
            placeholder="Password Confirm"
            onChangeText={password => handlePasswordConfirmChange(password)}
          />
          <BlueButton text="Confirm" onPress={goLogin} />
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({});
