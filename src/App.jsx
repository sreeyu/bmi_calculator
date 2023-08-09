import React, { useState } from "react";
import styles from './App.module.css'
import Inputs from "./components/Inputs";

function App() {

  const [height, setHeight] = useState(150);

  const [weight, setWeight] = useState(50)
  
  return (
    <div className={styles.app}>
      <h1>BMI Calculator</h1>
      <section className={styles.input}>
        <Inputs height={height} weight={weight} setHeight={setHeight} setWeight={setWeight} />
        <h3>Your BMI is:</h3>
        <span>{}</span>
      </section>
      <section>
        
      </section>
    </div>
  );
}

export default App;
