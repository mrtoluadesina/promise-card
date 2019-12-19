import { YELLOW_THEME, PINK_THEME, BLUE_THEME } from "./types";

export default function themeReducer(state, action) {
  switch (action.type) {
    case YELLOW_THEME:
      return { ...state, currentTheme: state.yellow, active: action.active };
    case PINK_THEME:
      return { ...state, currentTheme: state.pink, active: action.active };
    case BLUE_THEME:
      return { ...state, currentTheme: state.blue, active: action.active };
    default:
      return state;
  }
}
