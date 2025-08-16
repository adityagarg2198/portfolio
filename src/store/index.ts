import { Tabs } from "@/constants";
import { create } from "zustand";

export type TabType = (typeof Tabs)[keyof typeof Tabs];

type Point = { x: number; y: number };

interface AppState {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  snakeFood: number;
  setSnakeFood: (value: number) => void;
  snake: Point[];
  setSnake: (value: Point[]) => void;
  food: Point;
  setFood: (value: Point) => void;
  direction: Point;
  setDirection: (value: Point) => void;
  gameOver: "start" | "completed" | "over" | "playing";
  setGameOver: (value: "start" | "completed" | "over" | "playing") => void;
  resetGame: () => void;
}

const useAppStore = create<AppState>((set) => ({
  activeTab: Tabs.HELLO,
  setActiveTab: (tab) => set({ activeTab: tab }),
  snakeFood: 0,
  setSnakeFood: (value) =>
    set({
      snakeFood: value,
    }),
  snake: [{ x: 5, y: 5 }],
  setSnake: (value) => set({ snake: value }),
  food: { x: 10, y: 10 },
  setFood: (value) => set({ food: value }),
  direction: { x: 1, y: 0 },
  setDirection: (value) => set({ direction: value }),
  gameOver: "start",
  setGameOver: (value) => set({ gameOver: value }),
  resetGame: () =>
    set({
      snake: [{ x: 5, y: 5 }],
      direction: { x: 1, y: 0 },
      gameOver: "start",
      snakeFood: 0,
      food: { x: 10, y: 10 },
    }),
}));

// --- Active Tab ---
export const useActiveTab = () => useAppStore((state) => state.activeTab);
export const useSetActiveTab = () => useAppStore((state) => state.setActiveTab);

// --- Snake Food ---
export const useSnakeFood = () => useAppStore((state) => state.snakeFood);
export const useSetSnakeFood = () => useAppStore((state) => state.setSnakeFood);

// --- Snake ---
export const useSnake = () => useAppStore((state) => state.snake);
export const useSetSnake = () => useAppStore((state) => state.setSnake);

// --- Food ---
export const useFood = () => useAppStore((state) => state.food);
export const useSetFood = () => useAppStore((state) => state.setFood);

// --- Direction ---
export const useDirection = () => useAppStore((state) => state.direction);
export const useSetDirection = () => useAppStore((state) => state.setDirection);

// --- Game Status ---
export const useGameOver = () => useAppStore((state) => state.gameOver);
export const useSetGameOver = () => useAppStore((state) => state.setGameOver);

export const useResetGame = () => useAppStore((state) => state.resetGame);
