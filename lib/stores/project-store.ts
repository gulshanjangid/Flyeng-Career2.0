// lib/stores/project-store.ts
import { create } from 'zustand';

interface Project {
    id: string;
    name: string;
    description: string;
    html_content: string;
    css_content: string;
    js_content: string;
    updated_at: string;
}

interface ProjectState {
    projects: Project[];
    currentProject: Project | null;
    isLoading: boolean;

    setProjects: (projects: Project[]) => void;
    setCurrentProject: (project: Project | null) => void;
    setIsLoading: (isLoading: boolean) => void;
    addProject: (project: Project) => void;
    updateProjectInList: (project: Project) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
    projects: [],
    currentProject: null,
    isLoading: false,

    setProjects: (projects) => set({ projects }),
    setCurrentProject: (currentProject) => set({ currentProject }),
    setIsLoading: (isLoading) => set({ isLoading }),

    addProject: (project) => set((state) => ({
        projects: [project, ...state.projects]
    })),

    updateProjectInList: (project) => set((state) => ({
        projects: state.projects.map(p => p.id === project.id ? project : p),
        currentProject: state.currentProject?.id === project.id ? project : state.currentProject
    }))
}));
