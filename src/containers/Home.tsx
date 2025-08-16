import {
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import Snakegame from "./Snakegame";
import {
  useGameOver,
  useResetGame,
  useSetGameOver,
  useSnakeFood,
} from "@/store";
import { toast } from "sonner";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";

const Home = () => {
  const snakeFood = useSnakeFood();
  const gameStatus = useGameOver();
  const resetGame = useResetGame();

  const setGameStatus = useSetGameOver();

  const handleButtonClick = () => {
    if (gameStatus === "start") {
      setGameStatus("playing");
    } else {
      resetGame();
    }
  };

  useEffect(() => {
    if (gameStatus === "completed") {
      toast("COMPLETED 🚀", {
        position: "top-center",
        style: {
          fontSize: "2rem",
          width: "fit-content",
        },
      });
    } else if (gameStatus === "over") {
      toast("GAME OVER! 😢", {
        position: "top-center",
        style: {
          fontSize: "2rem",
          width: "fit-content",
        },
      });
    }
  }, [gameStatus]);

  return (
    <section className="flex items-center relative gap-2.5 w-full h-full min-h-52 p-2 lg:px-10">
      <div className="lg:hidden !w-12 background-blur-green bg-teal-400"></div>
      <div className="lg:hidden !w-12 background-blur-blue bg-indigo-500"></div>
      <section className="flex flex-1/2 flex-col gap-6 w-fit">
        <section className="flex flex-col">
          <p className="font-lg">Hi all. I am</p>
          <h1 className="heading-h1">Aditya Garg</h1>
          <h4 className="heading-h4">&gt; Software Developer</h4>
        </section>
        <section className="flex flex-col gap-1">
          <p className="hidden md:block font-md">
            // complete the game to continue
          </p>
          <p className="font-md">// find my profile on Github:</p>
          <p className="font-md heading-md">
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githubLink</span> ={" "}
            <a
              className="link-forground break-all"
              href={"https://github.com/adityagarg2198"}
            >
              "https://github.com/adityagarg2198"
            </a>
          </p>
        </section>
      </section>
      <section className="hidden lg:block flex-1/2 relative w-full min-h-52">
        <div className="background-blur-green bg-teal-400"></div>
        <div className="background-blur-blue bg-indigo-500"></div>
        <div className="border flex flex-col justify-between border-primary snake-game p-1.5">
          <div className="flex justify-between">
            <div className="bolt-up-left flex justify-center items-center">
              <X size={10} className="text-teal-900" />
            </div>
            <div className="bolt-up-right flex justify-center items-center">
              <X size={10} className="text-teal-900" />
            </div>
          </div>
          <Toaster />
          <div className="flex gap-3 px-1">
            <Snakegame />
            <div className="flex game-info flex-col">
              <div className="flex flex-col p-1 game-ctrl font-sm heading-md">
                <p>// use keyboard</p>
                <p>// arrows to play</p>
                <div className="flex mt-auto gap-0.5 items-center flex-col">
                  <div className="flex justify-center items-center game-key-cover">
                    <ChevronUp />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="flex justify-center items-center game-key-cover">
                      <ChevronLeft />
                    </div>
                    <div className="flex justify-center items-center game-key-cover">
                      <ChevronDown />
                    </div>
                    <div className="flex justify-center items-center game-key-cover">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-1 w-full h-8 font-sm heading-md">
                <p>// food left</p>
                <div className="flex flex-wrap w-full gap-1 p-1 px-2">
                  {new Array(10 - snakeFood).fill(null).map((_, index) => (
                    <div
                      className="h-1.5 w-1.5 border-2 border-teal-600 bg-teal-400 rounded-full"
                      key={index}
                    ></div>
                  ))}
                  {new Array(snakeFood).fill(null).map((_, index) => (
                    <div
                      className="h-1.5 w-1.5 border-2 border-teal-600 bg-white-400 rounded-full"
                      key={index}
                    ></div>
                  ))}
                </div>
              </div>
              <button
                onClick={handleButtonClick}
                className="mt-auto cursor-pointer ml-auto min-h-4 w-10 text-2xl  text-teal-950 rounded-xl bg-orange-300"
              >
                {gameStatus === "start" ? "Start" : "Re-Start"}
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="bolt-down-left flex justify-center items-center">
              <X size={10} className="text-teal-950" />
            </div>
            <div className="bolt-down-right flex justify-center items-center">
              <X size={10} className="text-[#163355]" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
