import ProjectItem from "./ProjectItem";
import dogImg from "/images/dogImg.png";
import heartImg from "/images/heart.png";
import bulldozerImg from "/images/bulldozer.png";
import TicImg from "/images/tic-tac-toe-4231109_640.jpg"
import foodImg from "/images/food-and-drink-industry-7279413_640.jpg"
export default function Projects() {
  return (
    <div id="projects" className="scroll-mt-20 flex flex-col justify-center items-center mb-14 ">
      <ProjectItem
        link={
          "https://github.com/Bbuluc/React-game-project"
        }
        image={TicImg}
        title="Tic-Tac-Toe Game"
        description="Developed a classic Tic-Tac-Toe game using React and vanilla CSS for styling. Implemented interactive gameplay logic, turn-based state management using React hooks, and game-over detection (win or draw)."
      />
      <ProjectItem
        link={
          "https://github.com/Bbuluc/React-food-order"
        }
        image={foodImg}
        title="Food Order Website"
        description="Built a responsive food ordering web app using React and vanilla CSS. Implemented features such as a dynamic menu, cart functionality, and order submission flow."
      />
      <ProjectItem
        link={
          "https://github.com/Bbuluc/DogClassificationProject/blob/main/dog_vision.ipynb"
        }
        image={dogImg}
        title="Dog breed Classification project"
        description="Created a deep learning image classification model to identify dog breeds from photos using TensorFlow and Keras."
      />
      <ProjectItem
        link={
          "https://github.com/Bbuluc/ML-Projects/blob/main/end-to-end-heart-disease-classification.ipynb"
        }
        image={heartImg}
        title="Heart Disease Prediction"
        description="Developed a machine learning classification model using Scikit-learn to predict the likelihood of heart disease based on patient data."
      />
      <ProjectItem
        link={
          "https://github.com/Bbuluc/ML-Projects/blob/main/bluebook-bulldozer-price-regression.ipynb"
        }
        image={bulldozerImg}
        title="Bulldozer Price Prediction"
        description="Built a regression model with Scikit-learn to predict the sale price of used bulldozers based on historical sales data."
      />
    </div>
  );
}

