import React from "react";
import styles from './Inputs.module.css';

function Inputs(){

    return(
        <div className={styles.inputs} >
            <div className={styles.control} >
                <label htmlFor="height">Height</label>
                <input id='height' type="range" step="1" min="140" max="220" />
            </div>
            <div className={styles.control} >
                <label htmlFor="weight">Weight</label>
                <input id='weight' type="range" step="1" min="40" max="220" />
            </div>
        </div>
    );
};

export default Inputs;