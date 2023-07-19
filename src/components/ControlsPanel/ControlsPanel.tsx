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
    <StyledControlsPanelWrapper>
      <StyledControlsButtonWrapper>
        <StyledControlsButton variant="big" onClick={onSortClick}>
          {isSorting ? <div>||</div> : <span>&rsaquo;</span>}
        </StyledControlsButton>
      </StyledControlsButtonWrapper>
      <RemainingStepsCounter count={count} />
    </StyledControlsPanelWrapper>
  );
};
