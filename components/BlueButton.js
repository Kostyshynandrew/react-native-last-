import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button, H3, H1 } from "native-base";
import { scale, moderateScale } from "../constants/VievPort";
import { colors } from "../constants/Colors";

const BlueButton = ({
  height,
  text,
  fontSize,
  textColor,
  buttonColor,
  onPress
}) => {
  const _height = height || 50;
  const _textColor = textColor || "white";
  const _fontSize = fontSize || 20;
  const _text = text || "write Text!!";
  const _buttonColor = buttonColor || `${colors.blue}`;
  const _onPress = onPress;

  const styles = StyleSheet.create({
    button: {
      borderRadius: 3,
      height: _height,
      backgroundColor: _buttonColor,
      marginTop: 10,
      marginBottom: 10
    },
    button_text: {
      // fontSize: _fontSize,
      fontWeight: "bold",
      color: _textColor,
      fontFamily: "Helvetica"
    }
  });

  return (
    <Button full onPress={_onPress} style={styles.button}>
      <H3 style={styles.button_text}>{_text}</H3>
    </Button>
  );
};

export default BlueButton;
