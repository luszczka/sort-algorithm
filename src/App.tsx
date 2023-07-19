import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
