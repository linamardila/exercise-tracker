import { useState } from "react";
import "../../App.css";

function RepetitionExercise({ name }) {
  const [count, setCount] = useState(0);
  const goal = 10;
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(count / goal, 1);
  const offset = circumference - progress * circumference;

  return (
    <div>
      <h2 className="exercise-title">{name}</h2>
      <div className="circle-container">
        <svg className="circle-svg" width="240" height="240">
          {/* Track */}
          <circle cx="120" cy="120" r={radius} fill="none" stroke="#1f4a44" strokeWidth="20" />
          {/* Progress */}
          <circle
            cx="120" cy="120" r={radius}
            fill="none"
            stroke="#EEE52D"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="circle-text">{count}/{goal}</div>
      </div>
      <div className="rep-controls">
        <button className="circle-btn" onClick={() => setCount(Math.max(0, count - 1))}>−</button>
        <span className="rep-count">{count}</span>
        <button className="circle-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default RepetitionExercise;