import { createContext, useEffect, useState } from "react";
import {
  IProject,
  IProjectsContext,
  IProjectsProviderProps,
} from "./interfaces";
import { api } from "../../services/api";

export const ProjectsContext = createContext({} as IProjectsContext);

export const ProjectsProvider = ({ children }: IProjectsProviderProps) => {
  const [projectFound, setProjectFound] = useState<IProject>({} as IProject);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const [projects, setProjects] = useState([] as IProject[]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await api.get("/Rogermferr/repos", {
          headers: {
            Authorization: "Bearer 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",
          },
        });

        const listProjects = response.data;

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

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        findProject,
        projectFound,
        projectModalOpen,
        setProjectModalOpen,
      }}>
      {children}
    </ProjectsContext.Provider>
  );
};
