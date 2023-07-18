import { StyledCounterWrapper } from "./RemainingStepsCounter.styled";

type RemainingStepsCounterProps = {
  count: number;
  isSorting?: boolean;
};

export const RemainingStepsCounter = ({
  count,
  isSorting,
}: RemainingStepsCounterProps) => {
  return (
    <StyledCounterWrapper>
      sorting steps left<span>{isSorting || count > 1 ? count : "-"}</span>
    </StyledCounterWrapper>
  );
};
