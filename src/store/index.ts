import { Tabs } from "@/constants";
import { create } from "zustand";

export type TabType = (typeof Tabs)[keyof typeof Tabs];

interface AppState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const useAppStore = create<AppState>((set) => ({
  activeTab: Tabs.HELLO,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export const useActiveTab = () => useAppStore((state) => state.activeTab);

export const useSetActiveTab = () => useAppStore((state) => state.setActiveTab);
