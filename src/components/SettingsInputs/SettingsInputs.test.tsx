import { render, screen } from "@testing-library/react";
import { SettingsInputs } from "./SettingsInputs";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<SettingsInputs />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <SettingsInputs
          chartOptions={{ chartSize: 10, minRange: 1, maxRange: 100 }}
          onElementsCountChange={onClickSpy}
          onMaxRangeChange={onClickSpy}
          onMinRangeChange={onClickSpy}
          onSortSpeedChange={onClickSpy}
          sortSpeed={300}
        />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testSettingsInputs");
    expect(element).toBeInTheDocument();
  });
});
