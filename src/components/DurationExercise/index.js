import { useState, useEffect, useRef } from "react";
import "../../App.css";

function DurationExercise({ name, duration = 30 }) {
  const [seconds, setSeconds] = useState(duration);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const goal = duration;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = seconds / goal;
  const offset = circumference - progress * circumference;

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => {
          if (prev <= 0) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const pad = (num) => String(num).padStart(2, "0");
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  const reset = () => {
    setRunning(false);
    setSeconds(duration);
  };

  return (
    <div>
      <h2 className="exercise-title">{name}</h2>
      <div className="circle-container">
        <svg className="circle-svg" width="220" height="220">
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#1f4a44" strokeWidth="18" />
          <circle cx="110" cy="110" r={radius} fill="none" stroke="#EEE52D" strokeWidth="18"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div className="circle-text">{minutes}:{pad(displaySeconds)}</div>
      </div>
      <div className="duration-controls">
        <button className="pill-btn" onClick={() => setRunning(true)}>Start</button>
        <button className="pill-btn" onClick={() => setRunning(false)}>Stop</button>
      </div>
      <div className="duration-controls-reset">
        <button className="pill-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DurationExercise;