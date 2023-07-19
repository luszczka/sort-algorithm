import { render, screen } from "@testing-library/react";
import { SettingsButtons } from "./SettingsButtons";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<SettingsButtons />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <SettingsButtons
          onGenerateChartClick={onClickSpy}
          onRandomClick={onClickSpy}
          onResetClick={onClickSpy}
        />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testSettingsButtons");
    expect(element).toBeInTheDocument();
  });
});
