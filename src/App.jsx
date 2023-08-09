import React, { useMemo, useState } from "react";
import styles from './App.module.css'
import Inputs from "./components/Inputs";

function App() {

  const [height, setHeight] = useState(150);

  const [weight, setWeight] = useState(50);

  const [bmi, setBMI] = useState(22.2);

  useMemo(() => {
    const heightInMeters = height/100;
    setBMI((weight / (heightInMeters * heightInMeters)).toFixed(1));
  },[height, weight])
  
  return (
    <div className={styles.app}>
      <h1>BMI Calculator</h1>
      <section className={styles.input}>
        <Inputs height={height} weight={weight} setHeight={setHeight} setWeight={setWeight} />
        <h3>Your BMI is:</h3>
        <span>{bmi}</span>
      </section>
      <section>
        
      </section>
    </div>
  );
}

export default App;
