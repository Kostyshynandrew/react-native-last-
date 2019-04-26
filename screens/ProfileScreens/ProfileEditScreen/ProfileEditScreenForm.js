import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container, Form, Button, H3 } from "native-base";
import MainInput from "../../../components/MainInput";
import Icon from "react-native-vector-icons/Ionicons";
import MyLinearGradient from "../../../components/MyLinearGradient";
import { colors } from "../../../constants/Colors";
import T from "prop-types";

profileEdit.propTypes = {
  handleFirstNameChange: T.func,
  handleLastNameChange: T.func,
  handleOrganizationChange: T.func,
  handlePositionChange: T.func,
  post: T.func,
  goProfileScreen: T.func,
  signOutUser: T.func
};

export default function profileEdit({
  handleFirstNameChange,
  handleLastNameChange,
  handleOrganizationChange,
  handlePositionChange,
  post,
  goProfileScreen,
  signOutUser
}) {
  return (
    <MyLinearGradient>
      <Container style={{ justifyContent: "center" }}>
        <Form>
          <Button full style={styles.button2} onPress={signOutUser}>
            <Text style={{ color: "white", fontSize: 18 }}>logout</Text>
          </Button>
          <H3 style={{ marginLeft: 0 }}>Profile edit</H3>
          <MainInput
            onChangeText={handleFirstNameChange}
            placeholder={"First name*"}
          />
          <MainInput
            onChangeText={handleLastNameChange}
            placeholder="Last name*"
          />
          <MainInput
            onChangeText={handleOrganizationChange}
            placeholder="Organization*"
          />
          <MainInput
            onChangeText={handlePositionChange}
            placeholder="Position"
          />
          <View style={styles.bottom}>
            <Button onPress={goProfileScreen} bordered style={styles.button}>
              <Icon
                style={{ marginRight: 10 }}
                name="md-arrow-back"
                color="white"
                size={25}
              />
              <Text style={{ fontSize: 18, color: "white" }}>Profile</Text>
            </Button>
            <Button style={styles.button2} onPress={post}>
              <Text style={{ color: "white", fontSize: 18 }}>Edit</Text>
            </Button>
          </View>
        </Form>
      </Container>
    </MyLinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "transparent",
    padding: 10
  },
  button2: {
    borderRadius: 3,
    backgroundColor: `${colors.blue}`,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});
