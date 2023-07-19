import {
  StyledCounterWrapper,
  StyledText,
} from "./RemainingStepsCounter.styled";

type RemainingStepsCounterProps = {
  count: number;
};

export const RemainingStepsCounter = ({
  count,
}: RemainingStepsCounterProps) => {
  return (
    <StyledCounterWrapper data-testid="testRemainingStepsCounter">
      <StyledText>sorting steps left</StyledText>
      <span>{count > 1 ? count : "-"}</span>
    </StyledCounterWrapper>
  );
};
