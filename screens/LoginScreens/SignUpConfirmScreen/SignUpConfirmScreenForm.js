import React from "react";
import { StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { Container, Form, Input, Item, H1, H3 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import LogoImage from "../../../components/LogoImage";
import T from "prop-types";

singUp.propTypes = {
  goNewPassword: T.func,
  handleChange1: T.func,
  handleChange2: T.func,
  handleChange3: T.func,
  handleChange4: T.func,
  handleChange5: T.func
};

export default function singUp({
  goNewPassword,
  handleChange1,
  handleChange2,
  handleChange3,
  handleChange4,
  handleChange5
}) {
  return (
    <Container>
      <LogoImage />
      <H1>Password reset confirm</H1>
      <H3>Et commodo exercitation enim occaecat anim</H3>
      <Form style={styles.form}>
        <Item style={[styles.email, styles.bottom]}>
          <Input
            placeholder="1"
            onChangeText={email => handleChange1(email)}
            style={styles.input}
          />
        </Item>
        <Item style={[styles.email, styles.bottom]}>
          <Input
            placeholder="2"
            onChangeText={email => handleChange2(email)}
            style={styles.input}
          />
        </Item>
        <Item style={[styles.email, styles.bottom]}>
          <Input
            placeholder="3"
            onChangeText={email => handleChange3(email)}
            style={styles.input}
          />
        </Item>
        <Item style={[styles.email, styles.bottom]}>
          <Input
            placeholder="4"
            onChangeText={email => handleChange4(email)}
            style={styles.input}
          />
        </Item>
        <Item style={[styles.email, styles.bottom]}>
          <Input
            placeholder="5"
            onChangeText={email => handleChange5(email)}
            style={styles.input}
          />
        </Item>
      </Form>
      <BlueButton text="Confirm" onPress={goNewPassword} />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingLeft: 18,
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 10
  },
  email: {
    borderColor: "transparent",
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 0,
    width: "15%"
  },
  bottom: {
    marginBottom: 20
  },
  bottom_menu: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  bottom_menu_text: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10
  },
  form: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  }
});
