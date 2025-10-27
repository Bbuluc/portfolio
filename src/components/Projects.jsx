import ProjectItem from "./ProjectItem";
import dogImg from "/images/dogImg.png";
import heartImg from "/images/heart.png";
import bulldozerImg from "/images/bulldozer.png";
import TicImg from "/images/tic-tac-toe-4231109_640.jpg";
import foodImg from "/images/food-and-drink-industry-7279413_640.jpg";
export default function Projects() {
  return (
    <div
      id="projects"
      className="scroll-mt-20 flex flex-col justify-center items-center mb-14 "
    >
      <ProjectItem
        link={"https://github.com/Bbuluc/React-game-project"}
        image={TicImg}
        title="Tic-Tac-Toe Game"
        description="Developed a classic Tic-Tac-Toe game using React and vanilla CSS for styling. Implemented interactive gameplay logic, turn-based state management using React hooks, and game-over detection (win or draw)."
      />
    </div>
  );
}
