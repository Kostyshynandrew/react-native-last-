import React from "react";
import { StyleSheet } from "react-native";
import { Container, Form, H1, H3 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

IntroScreen.propTypes = {
  goSignIn: T.func,
  goLogIn: T.func
};

export default function IntroScreen({ goSignIn, goLogIn }) {
  return (
    <MyLinearGradient>
      <Container style={styles.container}>
        <Form style={{ marginBottom: 100 }}>
          <LogoImage />
          <H1 style={styles.text}>APP NAME</H1>
          <H3 style={styles.text}>lorem hello world </H3>
          <BlueButton text="Sign In" onPress={goLogIn} />
          <BlueButton
            text="Sign Up"
            buttonColor="white"
            textColor="black"
            onPress={goSignIn}
          />
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});
