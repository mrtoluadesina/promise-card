import { YELLOW_THEME, PINK_THEME, BLUE_THEME, UPDATE_FORM } from "./types";

export default function appReducer(state, action) {
  switch (action.type) {
    case YELLOW_THEME:
      return { ...state, currentTheme: state.yellow, active: action.active };
    case PINK_THEME:
      return { ...state, currentTheme: state.pink, active: action.active };
    case BLUE_THEME:
      return { ...state, currentTheme: state.blue, active: action.active };
    case UPDATE_FORM:
      return { ...state, inputList: action.payload };
    default:
      return state;
  }
}
