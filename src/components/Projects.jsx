import ProjectItem from "./ProjectItem";

import TicImg from "/images/titanic.jpg";
import NoteImg from "/images/noteBook.jpg";

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
      <ProjectItem
        image={NoteImg}
        title="Notes Website"
        description="A full-stack notes application built with Next.js and SQLite, featuring custom authentication, session management, and user-scoped CRUD operations. Server Actions are used to handle database logic directly within the application. The frontend is styled with Tailwind CSS, providing a responsive and user-friendly interface for managing notes. Live demo and GitHub repository will be added soon."
        link="https://github.com/Bbuluc/notes-app/blob/main/README.md"
        github="https://github.com/Bbuluc/notes-app/blob/main/README.md"
        tech={["Next.js", "Tailwind CSS", "SQLite","Auth/validation"]}
      />
    </div>
  );
}
