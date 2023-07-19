import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<Button />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickSpy}>Hello</Button>
      </ThemeProvider>
    );
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });
  it("Should be clicked", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClickSpy}>Hello</Button>
      </ThemeProvider>
    );
    const element = screen.getByText("Hello");
    fireEvent.click(element, new MouseEvent("click"));
    expect(onClickSpy).toBeCalledTimes(1);
  });
});
