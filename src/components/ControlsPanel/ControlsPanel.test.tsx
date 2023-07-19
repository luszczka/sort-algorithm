import { render, screen } from "@testing-library/react";
import { ControlsPanel } from "./ControlsPanel";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<ControlsPanel />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <ControlsPanel count={0} isSorting={false} onSortClick={onClickSpy} />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testControlsPanel");
    expect(element).toBeInTheDocument();
  });
});
