export interface IProject {
  id: number;
  name: string;
  html_url: string;
  homepage?: string;
  description: string;
  language: string;
}

export interface IProjectsContext {
  projects: IProject[];
  findProject: (projectId: number) => void;
  projectFound: IProject;
  projectModalOpen: boolean;
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  switchTheme: () => void;
  switchedTheme: string | null;
}

export interface IProjectsProviderProps {
  children: React.ReactNode;
}
