import { createContext, useEffect, useState } from "react";
import {
  IProject,
  IProjectsContext,
  IProjectsProviderProps,
} from "./interfaces";
import { api } from "../../services/api";
// import { useLocation } from "react-router-dom";

export const ProjectsContext = createContext({} as IProjectsContext);

export const ProjectsProvider = ({ children }: IProjectsProviderProps) => {
  const [projectFound, setProjectFound] = useState<IProject>({} as IProject);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const [projects, setProjects] = useState([] as IProject[]);
  const [switchedTheme, setSwitchedTheme] = useState<string | null>(
    localStorage.getItem("@PORTFOLIO: THEME")
  );

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await api.get<IProject[]>(
          "/Rogermferr/repos?sort=created&direction=desc"
        );

        const listProjects = data.filter(
          (project) =>
            project.name !== "Rogermferr" &&
            project.name !== "Portifolio-Roger-Magalhaes"
        );

        setProjects(listProjects);
      } catch (error) {
        console.error(error);
      }
    };

    getProjects();
  }, []);

  const findProject = (projectId: number) => {
    const projectFound = projects.find((project) => project.id === projectId);

    setProjectFound(projectFound!);
    setProjectModalOpen(true);
  };

  const switchTheme = () => {
    if (!switchedTheme || switchedTheme === "dark") {
      setSwitchedTheme("light");
      localStorage.setItem("@PORTFOLIO: THEME", "light");
    } else if (switchedTheme === "light") {
      localStorage.setItem("@PORTFOLIO: THEME", "dark");
      setSwitchedTheme("dark");
    }
  };

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        findProject,
        projectFound,
        projectModalOpen,
        setProjectModalOpen,
        switchTheme,
        switchedTheme,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
