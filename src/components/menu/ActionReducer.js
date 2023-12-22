export const initstate = {
  isMenu: false,
  isSearch: false,
  isModal: false,
  isDark: false,
};

export const ActionReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_MENU":
      return { ...state, isMenu: action.payload.isMenu };
    case "SET_IS_SEARCH":
      return { ...state, isSearch: action.payload.isSearch };
    case "SET_IS_MODAL":
      return { ...state, isModal: action.payload.isModal };
    case "SET_IS_DARK":
      return { ...state, isDark: action.payload.isDark };
    default:
      return state;
  }
};
