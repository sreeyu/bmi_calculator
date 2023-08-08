import React from "react";
import styles from './App.module.css'
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className={styles.app}>
      <h1>BMI Calculator</h1>
      <section className={styles.input}>
        <Inputs />
        <h3>Your BMI is:</h3>
        <span>25.1</span>
      </section>
      <section>
        
      </section>
    </div>
  );
}

export default App;
