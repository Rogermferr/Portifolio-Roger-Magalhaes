import Routers from "./routes";
import { GlobalReset } from "./styles/reset";
import { GlobalTypography } from "./styles/typography";

function App() {
  return (
    <>
      <GlobalTypography />
      <GlobalReset />
      <Routers />
    </>
  );
}

export default App;
