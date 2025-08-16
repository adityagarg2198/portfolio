import {
  useSnake,
  useSetSnake,
  useFood,
  useSetFood,
  useDirection,
  useSetDirection,
  useSnakeFood,
  useSetSnakeFood,
  useGameOver,
  useSetGameOver,
} from "@/store";
import { useEffect } from "react";

const GRID_SIZE = 10;
const BOARD_WIDTH = 20; // columns
const BOARD_HEIGHT = 40; // rows

const Snakegame = () => {
  const snake = useSnake();
  const setSnake = useSetSnake();
  const food = useFood();
  const setFood = useSetFood();
  const direction = useDirection();
  const setDirection = useSetDirection();
  const gameOver = useGameOver();
  const setGameOver = useSetGameOver();
  const snakeFood = useSnakeFood();
  const setSnakeFood = useSetSnakeFood();
  // place random food
  const randomFood = () => {
    return {
      x: Math.floor(Math.random() * (BOARD_WIDTH - 2)),
      y: Math.floor(Math.random() * (BOARD_HEIGHT - 2)),
    };
  };

  // handle key press
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction.y === 0)
        setDirection({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && direction.y === 0)
        setDirection({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && direction.x === 0)
        setDirection({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && direction.x === 0)
        setDirection({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction]);

  // game loop
  useEffect(() => {
    if (gameOver !== "playing") return;
    const interval = setInterval(() => {
      const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };
      // collision with wall
      if (
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x >= BOARD_WIDTH - 2 ||
        newHead.y >= BOARD_HEIGHT - 2
      ) {
        setGameOver("over");
        setSnake(snake);
      }

      // collision with self
      if (snake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)) {
        setGameOver("over");
        setSnake(snake);
      }

      let newSnake = [newHead, ...snake];

      // eat food
      if (newHead.x === food.x && newHead.y === food.y) {
        setSnakeFood(snakeFood + 1);
        if (snakeFood < 9) {
          setFood(randomFood());
        } else {
          setGameOver("completed"); // stop after 10 foods
        }
      } else {
        newSnake.pop(); // move normally
      }
      setSnake(newSnake);
    }, 150);

    return () => clearInterval(interval);
  }, [direction, food, gameOver, snake]);

  return (
    <div className="game-display flex">
      {snake.map((seg, i) => (
        <div
          key={i}
          className="absolute bg-teal-500 rounded-full"
          style={{
            left: seg.x * GRID_SIZE,
            top: seg.y * GRID_SIZE,
            width: GRID_SIZE,
            height: GRID_SIZE,
          }}
        />
      ))}

      {/* Food */}
      {snakeFood < 10 && (
        <div
          className="absolute bg-red-400 rounded-full"
          style={{
            left: food.x * GRID_SIZE,
            top: food.y * GRID_SIZE,
            width: GRID_SIZE,
            height: GRID_SIZE,
          }}
        />
      )}
    </div>
  );
};

export default Snakegame;
