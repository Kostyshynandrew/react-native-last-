import { BackHandler, Alert } from "react-native";
import * as firebase from "firebase";

export const ADD_USER = "ADD_USER";
export const CLEAR_USER = "CLEAR_USER";
export const LOADING_START = "LOADING_START";
export const LOADING_STOP = "LOADING_STOP";
export const ADD_USERINFO = "ADD_USERINFO";
export const ADD_ITEMS = "ADD_ITEMS";
export const LAST_ITEM = "LAST_ITEM";
export const FEATURED = "FEATURED";
export const FAVORITE_ITEMS_KEYS = "FAVORITE_ITEMS_KEYS";
export const ADD_FAVORITE_ITEMS = "ADD_FAVORITE_ITEMS";

export const fetchUserInfo = user => async dispatch => {
  const response = await fetchUserInfoData(user);
  await dispatch({
    type: ADD_USERINFO,
    payload: response.toJSON()
  });
  await dispatch({
    type: ADD_USER,
    payload: user
  });
};

export const fetchItems = () => async dispatch => {
  const snapshot = await fetchItemsData();
  let arrayOfKeys = Object.keys(snapshot.val())
    .sort()
    .reverse();
  let results = arrayOfKeys.map(key => {
    let newItem = snapshot.val()[key];
    newItem.id = key;
    return newItem;
  });
  await dispatch({
    type: ADD_ITEMS,
    payload: results
  });
};

// fetch favoriteItemsKeys for user from server (doing it only once at start)

export const fetchFavoriteItemsKeys = id => async dispatch => {
  let results = [];
  let response = await fetchFavoriteKeysData(id);
  let arrayOfKeys = Object.keys(response.val()).sort();
  results = arrayOfKeys.map(key => response.val()[key]);
  await dispatch({
    type: FAVORITE_ITEMS_KEYS,
    payload: results
  });
};

// change star color if item is in favorite list , doing it at start and when extra fetching with scroll
export const changeInitialFeatured = (items, favoriteItemsKeys) => dispatch => {
  let favoriteItems = [];
  favoriteItemsKeys.forEach(key => {
    items.forEach(item => {
      if (item.id === key) {
        item.featured = true;
        favoriteItems.push(item);
      }
    });
  });
  dispatch({
    type: ADD_ITEMS,
    payload: items
  });
  dispatch({
    type: ADD_FAVORITE_ITEMS,
    payload: favoriteItems
  });
};

// post or delete data on server for favoriteItemsKeys (everytime when clicking on star)
export const sendFavoriteItemsKeys = (favoriteItemsKeys, id) => dispatch => {
  firebase
    .database()
    .ref(`users/${id}/favoriteItemsKeys`)
    .remove()
    .then(
      firebase
        .database()
        .ref(`users/${id}`)
        .update({
          favoriteItemsKeys: favoriteItemsKeys
        })
    )
    .catch(err => {
      console.log(err);
    });
};

// change item.featured , favoriteItems , favoriteItemsKeys(All logic in reducer)
export const handleClickIcon = item => async dispatch => {
  await dispatch({
    type: FEATURED,
    payload: item
  });
};

// other

export function clearUserLocal() {
  return dispatch => {
    dispatch({
      type: CLEAR_USER
    });
  };
}

// handle back button
export const handleBackButton = () => {
  Alert.alert(
    "Exit App",
    "Exiting the application?",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => BackHandler.exitApp()
      }
    ],
    {
      cancelable: false
    }
  );
  return true;
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function fetchUserInfoData(user) {
  const response = firebase
    .database()
    .ref(`users/${user.uid}/userInfo`)
    .once("value", data => {
      return data;
    })
    .catch(err => console.log(err));
  return response;
}
function fetchItemsData() {
  const response = firebase
    .database()
    .ref("items")
    .orderByKey()
    .once("value", data => {
      return data;
    })
    .catch(err => console.log(err));
  return response;
}
function fetchFavoriteKeysData(id) {
  const response = firebase
    .database()
    .ref(`users/${id}/favoriteItemsKeys`)
    .once("value")
    .then(snapshot => snapshot)
    .catch(err => console.log(err));
  return response;
}
