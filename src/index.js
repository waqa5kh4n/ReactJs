import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}</h1>
    </div>
  );
}

function App(prop) {
  return (
    <div>
      {prop.season === "summer" ? (
        <Lake name="Jenny Lake" />
      ) : prop.season === "winter" ? (
        <SkiResort name="JHMR" />
      ) : (
        <h1>Come back in the winter or summer</h1>
      )}
    </div>
  );
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
