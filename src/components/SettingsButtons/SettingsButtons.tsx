import { Button } from "../Button/Button";
import { StyledSettingsButtons } from "./SettingsButtons.styled";

type SettingsButtonsProps = {
  onGenerateChartClick: () => void;
  onRandomClick: () => void;
  onResetClick: () => void;
};

export const SettingsButtons = ({
  onGenerateChartClick,
  onRandomClick,
  onResetClick,
}: SettingsButtonsProps) => {
  return (
    <StyledSettingsButtons data-testid="testSettingsButtons">
      <Button onClick={onRandomClick}>set random</Button>
      <Button onClick={onResetClick}>reset</Button>
      <Button onClick={onGenerateChartClick} variant="primary">
        generate
      </Button>
    </StyledSettingsButtons>
  );
};
