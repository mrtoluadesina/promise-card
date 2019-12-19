import { YELLOW_THEME, PINK_THEME, BLUE_THEME } from "./types";

export default function themeReducer(state, action) {
  switch (action.type) {
    case YELLOW_THEME:
      return { ...state, currentTheme: state.yellow };
    case PINK_THEME:
      return { ...state, currentTheme: state.pink };
    case BLUE_THEME:
      return { ...state, currentTheme: state.blue };
    default:
      return state;
  }
}
