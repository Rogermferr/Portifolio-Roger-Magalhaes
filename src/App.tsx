import { useContext } from "react";
import Routers from "./routes";
import { GlobalReset } from "./styles/reset";
import { GlobalDarkStyle, GlobalLightStyle } from "./styles/typography";
import { ProjectsContext } from "./providers/ProjectsContext";

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
      <Routers />
    </>
  );
}

export default App;
