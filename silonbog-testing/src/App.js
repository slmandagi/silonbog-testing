import React from "react";
import "typeface-poppins";
import Styles from "./assets/Styles/App.module.css";
import { SignIn } from "./pages";


const App = () => {
  return (
    <div className={`${Styles.content}`}>
      <SignIn/>      
    </div>
  );
};

export default App;
