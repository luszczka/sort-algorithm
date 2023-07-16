import "styled-components";
import styles, { ColorTypes, FontSizesTypes, SpacingTypes } from "theme/theme";

type Theme = typeof styles;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: ColorTypes;
    fontSizes: FontSizesTypes;
    spacing: SpacingTypes;
  }
}
