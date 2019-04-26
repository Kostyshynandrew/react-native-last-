import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import AppContainer from "./navigation/LoginNavigator";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Setting a timer"
]);

firebase.initializeApp(firebaseConfig);


const StyleProviderTheme = ({ children }) => (
  <StyleProvider style={getTheme(platform)}>{children}</StyleProvider>
);
export default class App extends React.Component {
  render() {
    return (
      <StyleProviderTheme>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </StyleProviderTheme>
    );
  }
}
