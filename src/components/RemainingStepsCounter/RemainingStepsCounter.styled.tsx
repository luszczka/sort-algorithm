import styled from "styled-components";

const StyledCounterWrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.white_70};
  display: flex;
  gap: 5px;
  height: inherit;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: -50px;
  width: 100%;

  & span {
    color: ${({ theme }) => theme.colors.main_second};
    width: 20px;
  }
`;

const StyledText = styled.div`
  width: 80px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export { StyledCounterWrapper, StyledText };
