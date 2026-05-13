import { create } from 'zustand';
import { toast } from "sonner";

interface ProctoringState {
    violations: number;
    warnings: string[];
    isFullscreen: boolean;
    isTabActive: boolean;
    isTerminated: boolean;
    addViolation: (reason: string) => void;
    setFullscreen: (status: boolean) => void;
    setTabActive: (status: boolean) => void;
    reset: () => void;
}

export const useProctoringStore = create<ProctoringState>((set) => ({
    violations: 0,
    warnings: [],
    isFullscreen: false,
    isTabActive: true,
    isTerminated: false,
    addViolation: (reason) => set((state) => {
        const newCount = state.violations + 1;
        const newWarnings = [reason, ...state.warnings].slice(0, 5);

        if (newCount >= 3) {
            return { violations: newCount, warnings: newWarnings, isTerminated: true };
        }

        toast.error(`Violation ${newCount}/3: ${reason}`);
        // Consider calling server here to log violation
        return { violations: newCount, warnings: newWarnings };
    }),
    setFullscreen: (status) => set({ isFullscreen: status }),
    setTabActive: (status) => set({ isTabActive: status }),
    reset: () => set({ violations: 0, warnings: [], isFullscreen: false, isTabActive: true, isTerminated: false })
}));
