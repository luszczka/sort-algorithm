import {
  StyledControlsPanelWrapper,
  StyledControlsButton,
} from "./ControlsPanel.styled";

type ControlsPanelProps = {
  isSorting?: boolean;
  onSortClick: () => void;
};

export const ControlsPanel = ({
  isSorting,
  onSortClick,
}: ControlsPanelProps) => {
  return (
    <StyledControlsPanelWrapper>
      <StyledControlsButton variant="big" onClick={onSortClick}>
        {isSorting ? <div>||</div> : <span>&rsaquo;</span>}
      </StyledControlsButton>
    </StyledControlsPanelWrapper>
  );
};
