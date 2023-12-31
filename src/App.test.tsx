import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

describe("<App />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testApp");
    expect(element).toBeInTheDocument();
  });
});
