import { ChangeEvent } from "react";
import { Input, InputRange } from "../Input/Input";
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
  onSortSpeedChange: (event: ChangeEvent<HTMLInputElement>) => void;
  sortSpeed: number;
};

export const SettingsInputs = ({
  chartOptions,
  onElementsCountChange,
  onMaxRangeChange,
  onMinRangeChange,
  onSortSpeedChange,
  sortSpeed,
}: SettingsInputsProps) => {
  return (
    <StyledSettingsInputs data-testid="testSettingsInputs">
      <StyledInputsBeside>
        <StyledHeding>chart settings</StyledHeding>
        <StyledInputWithLabel>
          <InputRange
            inputValue={sortSpeed}
            label="sort speed"
            onChange={onSortSpeedChange}
          />
        </StyledInputWithLabel>
      </StyledInputsBeside>
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
