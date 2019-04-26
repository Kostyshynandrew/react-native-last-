import React from "react";
import { StyleSheet } from "react-native";
import { Container, Form, View, H1, H3 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import MainInput from "../../../components/MainInput";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

password.propTypes = {
  handleEmailChange: T.func,
  resetPassword: T.func
};

export default function password({ handleEmailChange, resetPassword }) {
  return (
    <MyLinearGradient>
      <Container>
        <LogoImage />
        <H1>Forgot Password</H1>
        <H3>UpEnim consectetur reprehenderit minim anim fugiat</H3>
        <Form>
          <MainInput
            placeholder="Email"
            onChangeText={email => handleEmailChange(email)}
          />
          <BlueButton text="Reset" onPress={resetPassword} />
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({});
