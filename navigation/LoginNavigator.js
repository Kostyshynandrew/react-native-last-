import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

// login screens

import IntroScreen from "../screens/LoginScreens/IntroScreen";
import LoginScreen from "../screens/LoginScreens/LoginScreen";
import SignUpScreen from "../screens/LoginScreens/SignUpScreen";
import SignUpConfirmScreen from "../screens/LoginScreens/SignUpConfirmScreen";
import ForgotPasswordScreen from "../screens/LoginScreens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/LoginScreens/NewPasswordScreen";

// welcome screens

import WelcomeScreen from "../screens/LoginScreens/WelcomeScreen";
import ProfileFillingScreen from "../screens/LoginScreens/ProfileFillingScreen";

// listing screens next

import ListingScreen from "../screens/ListingScreens/ListingScreen";
import BarcodeScreen from "../screens/ListingScreens/BarcodeScreen";
import FavoritesScreen from "../screens/ListingScreens/FavoritesScreen";

// profile screens next

import ProfileScreen from "../screens/ProfileScreens/ProfileScreen";
import ProfileEditScreen from "../screens/ProfileScreens/ProfileEditScreen";
import ChangePasswordScreen from "../screens/ProfileScreens/ChangePasswordScreen";
import ChangeEmailScreen from "../screens/ProfileScreens/ChangeEmailScreen";

const ProfileStack = createStackNavigator(
  {
    ProfileScreen,
    ProfileEditScreen,
    ChangePasswordScreen,
    ChangeEmailScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ListingStack = createStackNavigator(
  {
    ListingScreen,
    BarcodeScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ProfileBottomTabNavigatior = createBottomTabNavigator(
  {
    ListingScreen: {
      screen: ListingStack,
      navigationOptions: {
        tabBarLabel: "Listing"
      }
    },
    FavoritesScreen: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarLabel: "Favorites",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderLeftColor: "#c9c9c9",
        borderRightColor: "#c9c9c9"
      }
    },
    ProfileScreen: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
  },
  {
    initialRouteName: "ListingScreen",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        let { routeName } = navigation.state;
        let iconName;
        // let size = focused ? 35 : 25;

        if (routeName === "ProfileScreen") {
          iconName = "md-home";
        }
        if (routeName === "ListingScreen") {
          iconName = "md-list-box";
        }
        if (routeName === "FavoritesScreen") {
          iconName = "md-star";
        }
        return (
          <Icon
            // type="font-awsome"
            color={`${tintColor}`}
            name={`${iconName}`}
            size={30}
            style={{ paddingTop: 5 }}
          />
        );
      }
    }),
    tabBarOptions: {
      style: {
        height: 43,
        borderTopWidth: 1,
        borderTopColor: "#c9c9c9",
        backgroundColor: "#45a0f3"
      },
      labelStyle: {
        fontSize: 8,
        marginBottom: 0.5
      },
      // activeBackgroundColor: "lightblue",
      // inactiveBackgroundColor: "white",
      activeTintColor: "#ffcd02",
      inactiveTintColor: "white"
    }
  }
);

const ResetPassword = createStackNavigator(
  {
    LoginScreen,
    ForgotPasswordScreen,
    NewPasswordScreen,
    SignUpConfirmScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const WelcomeBundle = createSwitchNavigator({
  IntroScreen,
  ProfileFillingScreen,
  WelcomeScreen,
  SignUpScreen,
  ResetPassword
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeBundle },
  ProfileBottomTabNavigatior
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
