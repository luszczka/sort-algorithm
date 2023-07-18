import { StyledCounterWrapper } from "./RemainingStepsCounter.styled";

type RemainingStepsCounterProps = {
  count: number;
};

export const RemainingStepsCounter = ({
  count,
}: RemainingStepsCounterProps) => {
  return (
    <StyledCounterWrapper>
      sorting steps left<span>{count > 1 ? count : "-"}</span>
    </StyledCounterWrapper>
  );
};
