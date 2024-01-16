import { useContext } from "react";
// import Routers from "./routes";
import { GlobalReset } from "./styles/reset";
import { GlobalDarkStyle, GlobalLightStyle } from "./styles/typography";
import { ProjectsContext } from "./providers/ProjectsContext";
import AllPages from "./pages/AllPages";

function App() {
  const { switchedTheme } = useContext(ProjectsContext);

  return (
    <>
      {switchedTheme === "dark" || !switchedTheme ? (
        <GlobalDarkStyle />
      ) : (
        <GlobalLightStyle />
      )}
      <GlobalReset />
      {/* <Routers /> */}
      <AllPages/>
    </>
  );
}

export default App;
