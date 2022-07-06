import React from "react";
import "typeface-poppins";
import "./App.css";
const App = () => {
  return (
    <div className="header">
      <button
        type="button"
        className="btn btn-primary"
      >
        Primary
      </button>
      <h1>Bold</h1>
      <p>pppp</p>
      <i className="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
    </div>
  );
};

export default App;
