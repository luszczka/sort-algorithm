import styled from "styled-components";

const StyledSettingsInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  max-height: 120px;

  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

const StyledInputsBeside = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.space_4};
`;

const StyledInputWithLabel = styled.div`
  display: flex;
  width: 100%;
`;

const StyledHeding = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.paragraph};
  text-align: left;
  width: 100%;
`;

export {
  StyledSettingsInputs,
  StyledInputsBeside,
  StyledInputWithLabel,
  StyledHeding,
};
