import ProjectItem from "./ProjectItem";

import TicImg from "/images/titanic.jpg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="scroll-mt-20 flex flex-col justify-center items-center mb-14 "
    >
      <ProjectItem
        image={TicImg}
        title="Titanic Survival Prediction"
        description="A full-stack web application that predicts Titanic survival probability using a Random Forest model optimized with Grid Search. The frontend is built with React and Tailwind CSS and deployed on Vercel, while the FastAPI backend and ML model are hosted on Render. More technical details and setup instructions are available in the project’s README on GitHub."
        link="https://titanic-prediction-seven.vercel.app"
        github="https://github.com/Bbuluc/titanic-prediction"
        tech={["React", "Tailwind CSS", "FastAPI", "Python", "scikit-learn"]}
      />
    </div>
  );
}