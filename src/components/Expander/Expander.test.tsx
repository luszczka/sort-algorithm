import { fireEvent, render, screen } from "@testing-library/react";
import { Expander } from "./Expander";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<Expander />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Expander isSettingsOpen={false} onClick={onClickSpy} />
      </ThemeProvider>
    );
    const element = screen.getByText("‹");
    expect(element).toBeInTheDocument();
  });
  it("Should be clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <Expander isSettingsOpen={false} onClick={onClickSpy} />
      </ThemeProvider>
    );
    const element = screen.getByText("‹");
    fireEvent.click(element, new MouseEvent("click"));
    expect(onClickSpy).toBeCalledTimes(1);
  });
});
