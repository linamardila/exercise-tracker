import { useState } from "react";
import "../../App.css";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);
  const goal = 10;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(count / goal, 1);
  const offset = circumference - progress * circumference;

  return (
    <div>
      <h2 className="exercise-title">{name}</h2>
      <div className="circle-container">
        <svg className="circle-svg" width="220" height="220">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#e0e0e0" strokeWidth="18" />
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#aaa" strokeWidth="18"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div className="circle-text">{count}/{goal}</div>
      </div>
      <div className="rep-controls">
        <button className="circle-btn" onClick={() => setCount(Math.max(0, count - 1))}>−</button>
        <span className="rep-count">{count}</span>
        <button className="circle-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="duration-controls-reset">
        <button className="pill-btn" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;