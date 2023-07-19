import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onChangeSpy = jest.fn();

describe("<Input />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input onChange={onChangeSpy} inputValue={1} label="label" />
      </ThemeProvider>
    );
    const element = screen.getByText("label");

    expect(element).toBeInTheDocument();
  });
  it("Value should be changed", () => {
    render(
      <ThemeProvider theme={theme}>
        <Input onChange={onChangeSpy} inputValue={1} label="label" />
      </ThemeProvider>
    );
    const element = screen.getByText("label");
    fireEvent.change(element);
  });
});
