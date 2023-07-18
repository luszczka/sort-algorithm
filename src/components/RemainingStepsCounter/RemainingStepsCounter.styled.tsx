import styled from "styled-components";
import { colors, fontSizes, spacing } from "../../theme/theme";

const StyledCounterWrapper = styled.div`
  align-items: flex-end;
  color: ${(props) => props.theme.colors.white_70};
  display: flex;
  gap: 5px;
  height: inherit;
  justify-content: flex-end;
  margin-right: 20px;

  & span {
    color: ${(props) => props.theme.colors.main_second};
    width: 20px;
  }
`;

StyledCounterWrapper.defaultProps = {
  theme: {
    colors,
    fontSizes,
    spacing,
  },
};

export { StyledCounterWrapper };
