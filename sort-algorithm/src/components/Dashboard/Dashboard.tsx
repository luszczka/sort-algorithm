import { quickSort } from "../../utils/quickSort";
import {
  StyledButtonsWrapper,
  StyledChartWrapper,
  StyledDashboardWrapper,
} from "./Dashboard.styled";

export const Dashboard = () => {
  console.log(quickSort({ unsortedNumbers: [4, 9, 2, 6, 8, 10, 3, 1, 7, 5] }));
  return (
    <StyledDashboardWrapper>
      <StyledButtonsWrapper>
        <button>Generate numbers</button>
        <button>Start/Stop sorting</button>
      </StyledButtonsWrapper>
      <StyledChartWrapper>chart</StyledChartWrapper>
    </StyledDashboardWrapper>
  );
};
