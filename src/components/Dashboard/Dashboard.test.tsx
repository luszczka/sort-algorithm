import { render, screen } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

describe("<Dashboard />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testDashboard");
    expect(element).toBeInTheDocument();
  });
});
