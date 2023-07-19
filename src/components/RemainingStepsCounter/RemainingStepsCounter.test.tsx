import { render, screen } from "@testing-library/react";
import { RemainingStepsCounter } from "./RemainingStepsCounter";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

describe("<RemainingStepsCounter />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <RemainingStepsCounter count={0} />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testRemainingStepsCounter");
    expect(element).toBeInTheDocument();
  });
});
