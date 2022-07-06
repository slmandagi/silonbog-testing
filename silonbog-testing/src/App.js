import React from "react";
import "typeface-poppins";
import "./App.css";
const App = () => {
  return (
    <div className="header">
      <button
        type="button"
        className="btn btn-primary"
        style={{ fontFamily: "poppins", fontWeight: 100 }}
      >
        Primary
      </button>
      <i className="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
    </div>
  );
};

export default App;
