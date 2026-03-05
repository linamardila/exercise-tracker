import { useState } from "react";
import "../../App.css";

function MaxLiftExercise({ name }) {
  const [unit, setUnit] = useState("lbs");
  const [weight, setWeight] = useState(75);
  const [reps, setReps] = useState(6);

  return (
    <div>
      <h2 className="exercise-title">{name}</h2>

      {/* LBS / KG Toggle */}
      <div className="unit-toggle">
        <button
          className={`unit-btn ${unit === "lbs" ? "active" : "inactive"}`}
          onClick={() => setUnit("lbs")}
        >
          LBS
        </button>
        <button
          className={`unit-btn ${unit === "kg" ? "active" : "inactive"}`}
          onClick={() => setUnit("kg")}
        >
          KG
        </button>
      </div>

      {/* Weight */}
      <div className="lift-section">
        <div className="lift-label">Weight</div>
        <div className="lift-counter">
          <button
            className="circle-btn"
            onClick={() => setWeight((w) => Math.max(0, w - 5))}
          >
            −
          </button>
          <span className="lift-value">{weight}</span>
          <button
            className="circle-btn"
            onClick={() => setWeight((w) => w + 5)}
          >
            +
          </button>
        </div>
      </div>

      {/* Reps */}
      <div className="lift-section">
        <div className="lift-label">Reps</div>
        <div className="lift-counter">
          <button
            className="circle-btn"
            onClick={() => setReps((r) => Math.max(0, r - 1))}
          >
            −
          </button>
          <span className="lift-value">{reps}</span>
          <button className="circle-btn" onClick={() => setReps((r) => r + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="duration-controls-reset">
        <button
          className="pill-btn"
          onClick={() => {
            setWeight(0);
            setReps(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default MaxLiftExercise;
