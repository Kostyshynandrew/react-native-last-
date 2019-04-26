import React from "react";
import { StyleSheet } from "react-native";
import { Input, Item } from "native-base";
import { scale, moderateScale } from "../constants/VievPort";

const MainInput = ({
  onChangeText,
  placeholder,
  defaultValue,
  marginTop,
  marginBottom,
  fontSize,
  height,
  secureTextEntry
}) => {
  const _onChangeText = onChangeText;
  const _placeholder = placeholder;
  // const _defaultValue = defaultValue;
  const _marginTop = marginTop || 10;
  const _marginBottom = marginBottom || 10;
  const _fontSize = fontSize || 17;
  const _height = height || 50;
  const _secureTextEntry = secureTextEntry || false;

  const styles = StyleSheet.create({
    container: {
      borderColor: "transparent",
      marginTop: _marginTop,
      marginBottom: _marginBottom,
      marginLeft: 0
    },
    input: {
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 3,
      paddingLeft: 15,
      fontSize: _fontSize,
      height: _height,
      color: "white",
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  });

  return (
    <Item style={styles.container}>
      <Input
        placeholder={_placeholder}
        // defaultValue=""
        onChangeText={_onChangeText}
        style={styles.input}
        placeholderTextColor={"white"}
        selectionColor={"white"}
        secureTextEntry={_secureTextEntry}
      />
    </Item>
  );
};

export default MainInput;
