import { ChangeEvent } from "react";
import { Input } from "../Input/Input";
import {
  StyledInputWithLabel,
  StyledInputsBeside,
  StyledSettingsInputs,
  StyledHeding,
} from "./SettingsInputs.styled";
import { ChartOptions } from "../../types/types";

type SettingsInputsProps = {
  chartOptions: ChartOptions;
  onElementsCountChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMaxRangeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMinRangeChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SettingsInputs = ({
  chartOptions,
  onElementsCountChange,
  onMaxRangeChange,
  onMinRangeChange,
}: SettingsInputsProps) => {
  return (
    <StyledSettingsInputs>
      <StyledHeding>chart settings</StyledHeding>
      <StyledInputWithLabel>
        <Input
          inputValue={chartOptions.chartSize}
          label="chart elements count"
          onChange={onElementsCountChange}
        />
      </StyledInputWithLabel>
      <StyledInputsBeside>
        <StyledInputWithLabel>
          <Input
            inputValue={chartOptions.minRange}
            label="elements range from"
            onChange={onMinRangeChange}
          />
        </StyledInputWithLabel>
        <StyledInputWithLabel>
          <Input
            inputValue={chartOptions.maxRange}
            label="elements range to"
            onChange={onMaxRangeChange}
          />
        </StyledInputWithLabel>
      </StyledInputsBeside>
    </StyledSettingsInputs>
  );
};
