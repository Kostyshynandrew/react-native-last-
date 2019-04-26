import React from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Form, View, H1 } from "native-base";
import BlueButton from "../../../components/BlueButton";
import MainInput from "../../../components/MainInput";
import MyLinearGradient from "../../../components/MyLinearGradient";
import T from "prop-types";

profile.propTypes = {
  handleFirstNameChange: T.func,
  handleLastNameChange: T.func,
  handleOrganizationChange: T.func,
  handlePositionChange: T.func,
  post: T.func
};

export default function profile({
  handleFirstNameChange,
  handleLastNameChange,
  handleOrganizationChange,
  handlePositionChange,
  post
}) {
  return (
    <MyLinearGradient>
      <Container>
        <H1>Welcome</H1>
        <MainInput
          onChangeText={handleFirstNameChange}
          placeholder="First name*"
        />
        <MainInput
          onChangeText={handleLastNameChange}
          placeholder="Last name*"
        />
        <MainInput
          onChangeText={handleOrganizationChange}
          placeholder="Organization*"
        />
        <MainInput onChangeText={handlePositionChange} placeholder="Position" />
        <BlueButton text="Next" onPress={post} />
        <Form />
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({});
