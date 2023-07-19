import styled from "styled-components";

const StyledSettingsButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.space_2};
  justify-content: space-between;
`;

export { StyledSettingsButtons };
