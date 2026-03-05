import { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import MaxLiftExercise from "./components/MaxLiftExercise";

const exercises = [
  { name: "Push Ups", type: "repetition", subtitle: "10 reps" },
  { name: "Running", type: "duration", duration: 480, subtitle: "8 minutes" },
  { name: "Plank", type: "duration", duration: 30, subtitle: "30 seconds" },
  { name: "Bench Press", type: "maxlift", subtitle: "Maximum Lift" },
];

function App() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div className="app-container">
        <button className="back-btn" onClick={() => setSelected(null)}>‹</button>
        {selected.type === "repetition" && <RepetitionExercise name={selected.name} />}
        {selected.type === "duration" && <DurationExercise name={selected.name} duration={selected.duration} />}
        {selected.type === "maxlift" && <MaxLiftExercise name={selected.name} />}
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="home-logo">strive</div>
      <div className="home-welcome">Welcome Back!</div>
      <div className="home-username">Lucy Maxwell</div>
      <div className="home-section-label">Exercises</div>
      {exercises.map((ex) => (
        <div key={ex.name} className="exercise-card">
          <div className="exercise-card-info">
            <h2>{ex.name}</h2>
            <span>{ex.subtitle}</span>
          </div>
          <button className="continue-btn" onClick={() => setSelected(ex)}>Continue</button>
        </div>
      ))}
    </div>
  );
}

export default App;