import { StyledExpanderWrapper } from "./Expander.styled";

type ExpanderProps = {
  isSettingsOpen: boolean;
  onClick: () => void;
};

export const Expander = ({ isSettingsOpen, onClick }: ExpanderProps) => {
  return (
    <StyledExpanderWrapper isSettingsOpen={isSettingsOpen} onClick={onClick}>
      <span>&lsaquo;</span>
    </StyledExpanderWrapper>
  );
};
