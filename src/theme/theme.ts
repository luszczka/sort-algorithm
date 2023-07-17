const colors = {
  background: "#202030",
  main: "#5b507a",
  main_dark: "#38304b",
  main_second: "#FED05D",
  white: "#bdbdbd",
  white_20: "#bdbdbd2a",
  white_70: "#bdbdbd70",
};

const fontSizes = {
  small: "0.75rem",
  paragraph: "1.2rem",
};

const spacing = {
  space_2: "0.5rem",
  space_4: "1rem",
  space_6: "1.5rem",
};

export type ColorTypes = typeof colors;
export type FontSizesTypes = typeof fontSizes;
export type SpacingTypes = typeof spacing;

export { colors, fontSizes, spacing };
