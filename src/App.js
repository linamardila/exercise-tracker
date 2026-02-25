import { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

const exercises = [
  { name: "Push Ups", type: "repetition" },
  { name: "Running", type: "duration", duration: 480 },
  { name: "Plank", type: "duration", duration: 60 },
];

function App() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div className="app-container">
        <button className="back-btn" onClick={() => setSelected(null)}>‹</button>
        {selected.type === "repetition"
          ? <RepetitionExercise name={selected.name} />
          : <DurationExercise name={selected.name} duration={selected.duration} />}
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="menu-title">Exercises</h1>
      {exercises.map((ex) => (
        <div key={ex.name} className="exercise-card">
          <h2>{ex.name}</h2>
          <button className="start-btn" onClick={() => setSelected(ex)}>Start</button>
        </div>
      ))}
    </div>
  );
}

export default App;