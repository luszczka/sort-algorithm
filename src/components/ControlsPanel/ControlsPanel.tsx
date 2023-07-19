import { RemainingStepsCounter } from "../RemainingStepsCounter/RemainingStepsCounter";
import {
  StyledControlsPanelWrapper,
  StyledControlsButtonWrapper,
  StyledControlsButton,
} from "./ControlsPanel.styled";

type ControlsPanelProps = {
  count: number;
  isSorting?: boolean;
  onSortClick: () => void;
};

export const ControlsPanel = ({
  count,
  isSorting,
  onSortClick,
}: ControlsPanelProps) => {
  return (
    <StyledControlsPanelWrapper data-testid="testControlsPanel">
      <StyledControlsButtonWrapper>
        <StyledControlsButton onClick={onSortClick}>
          {isSorting ? <div>||</div> : <span>&rsaquo;</span>}
        </StyledControlsButton>
      </StyledControlsButtonWrapper>
      <RemainingStepsCounter count={count} />
    </StyledControlsPanelWrapper>
  );
};
