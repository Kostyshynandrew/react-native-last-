import {
  ADD_USER,
  CLEAR_USER,
  ADD_USERINFO,
  ADD_ITEMS,
  FEATURED,
  FAVORITE_ITEMS_KEYS,
  ADD_FAVORITE_ITEMS
} from "../actions/userActions";

const initialState = {
  user: {},
  userInfo: null,
  items: [],
  favoriteItems: [],
  favoriteItemsKeys: []
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {}
      };
    case ADD_USERINFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case FEATURED:
      const Item = state.items.find(item => item.id === action.payload.id);
      if (Item.featured) {
        Item.featured = false;
        return {
          ...state,
          items: [...state.items],
          favoriteItems: state.favoriteItems.filter(
            item => item.id !== Item.id
          ),
          favoriteItemsKeys: state.favoriteItemsKeys.filter(
            item => item !== Item.id
          )
        };
      } else {
        Item.featured = true;
        return {
          ...state,
          items: [...state.items],
          favoriteItems: [Item, ...state.favoriteItems],
          favoriteItemsKeys: [Item.id, ...state.favoriteItemsKeys]
        };
      }
    case FAVORITE_ITEMS_KEYS:
      return {
        ...state,
        favoriteItemsKeys: action.payload
      };
    case ADD_FAVORITE_ITEMS:
      return {
        ...state,
        favoriteItems: action.payload
      };
    default:
      return state;
  }
}
