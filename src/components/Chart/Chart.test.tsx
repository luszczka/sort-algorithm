import { render, screen } from "@testing-library/react";
import { Chart } from "./Chart";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const onClickSpy = jest.fn();

describe("<Chart />", () => {
  it("Should render", () => {
    render(
      <ThemeProvider theme={theme}>
        <Chart
          count={0}
          data={[]}
          dataLength={10}
          onSortClick={onClickSpy}
          pivots={[]}
          isSettingsOpen={true}
          isSorting={false}
        />
      </ThemeProvider>
    );
    const element = screen.getByTestId("testChart");
    expect(element).toBeInTheDocument();
  });
});
