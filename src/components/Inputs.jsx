import React, { useMemo, useState } from "react";
import styles from './Inputs.module.css';

function Inputs(props){

    const getHeight = (event) =>{
        props.setHeight(event.target.value);
    }

    const getWeight = (event) => {
        props.setWeight(event.target.value);
    }

    

    return(
        <div className={styles.inputs} >
            <div className={styles.control} >
                <label htmlFor="height">Height: {props.height}cm</label>
                <input id='height' type="range" defaultValue={props.height} step="1" min="140" max="220" onChange={getHeight} />
            </div>
            <div className={styles.control} >
                <label htmlFor="weight">Weight: {props.weight}kg</label>
                <input id='weight' type="range" defaultValue={props.weight} step="1" min="40" max="220" onChange={(getWeight)} />
            </div>
        </div>
    );
};

export default Inputs;