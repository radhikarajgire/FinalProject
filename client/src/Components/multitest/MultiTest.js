import React, {useEffect, useState, useContext} from "react";
import Styles from "./MultiTest.module.css"
import { StateContext } from "../statecontext/stateContext";


function MultiTest(){
const {customElements} = useContext(StateContext);
const [choice, setChoice]=useState('A1');

function TryAgain(){


}





return(

    <div className={Styles.holderholder}>
        <form>
            <label className={Styles.label}>Choose a level: </label>
                <select onChange={(e)=>setChoice(e.target.value)} className={Styles.select}>
                    <option value="A1">A1</option> 
                    <option value="A2">A2</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>   
                </select>
            <input onClick={(e)=>TryAgain() } className={Styles.inputlevel} type="submit" value="TRY"></input>
        </form>
        <div className={Styles.holder}>
            <div className={Styles.container}>
            {customElements.map(entry=>
            (<div className={Styles.questionform}>
                <h3>{entry.q}</h3>
                <h3 className={Styles.answer}>{entry.a}</h3>
                <h3 className={Styles.answer}>{entry.raone}</h3>
                <h3 className={Styles.answer}>{entry.ratwo}</h3>
                <h3 className={Styles.answer}>{entry.rathree}</h3>
                <h3 className={Styles.answer}>{entry.rafour}</h3>
            </div>
            
            ))}
                
            </div> 
        </div>
    </div>


)


}

export default MultiTest;