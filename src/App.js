import "./App.css";
import GlobalStyle from "./global/global-style";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
