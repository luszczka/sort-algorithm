import styled from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledSettingsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.space_2};
  justify-content: space-between;
`;

StyledSettingsButtons.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledSettingsButtons };
