import {
  StyledControlsPanelWrapper,
  StyledControlsButton,
} from "./ControlsPanel.styled";

type ControlsPanelProps = {
  onFrameBack: () => void;
  onFrameForward: () => void;
  onSortClick: () => void;
};

export const ControlsPanel = ({
  onFrameBack,
  onSortClick,
  onFrameForward,
}: ControlsPanelProps) => {
  return (
    <StyledControlsPanelWrapper>
      <StyledControlsButton variant="small" onClick={onFrameBack}>
        |<span>&lsaquo;</span>
      </StyledControlsButton>
      <StyledControlsButton variant="big" onClick={onSortClick}>
        <span>&rsaquo;</span>
      </StyledControlsButton>
      <StyledControlsButton variant="small" onClick={onFrameForward}>
        <span>&rsaquo;</span>|
      </StyledControlsButton>
    </StyledControlsPanelWrapper>
  );
};
