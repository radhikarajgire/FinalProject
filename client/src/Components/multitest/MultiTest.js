import React, {useEffect, useState, useContext} from "react";
import Styles from "./MultiTest.module.css"
import { StateContext } from "../statecontext/stateContext";


function MultiTest(){
const {customElements} = useContext(StateContext);
const [choice, setChoice]=useState('A1');
const [questionnumber, setQuestionNumber]=useState(0)
const [singlequestioninfo, setSingleQuestionInfo]=useState([])
const [correctclass, setCorrectClass]=useState()

useEffect(()=>{
    var dataloop=[]
    var i
    for(i=0; i<5; i++){
        dataloop = dataloop.concat([Styles.answer])
    }
    setCorrectClass(dataloop)


if(questionnumber<customElements.length){
const newElement = [{id: 1, a: customElements[questionnumber].a},{id: 2, a: customElements[questionnumber].waone},{id:3, a: customElements[questionnumber].watwo},{id:4, a: customElements[questionnumber].wathree},{id: 5, a: customElements[questionnumber].wafour}]
shuffleArray(newElement)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    setSingleQuestionInfo(newElement)}
   
}

}, [questionnumber])

function correct(e, idi){
    const newdata=correctclass
    if(parseInt(e.target.id)===1){
        newdata[idi]=Styles.answerright
        setCorrectClass([...newdata])
        setTimeout(()=>{
         if(questionnumber<customElements.length-1){           
        setQuestionNumber((questionnumber+1))}
        else{setQuestionNumber(0)}
    }, 1000)
    }else{newdata[idi]=Styles.answerwrong
        setCorrectClass([...newdata])}
}



return(

    <div className={Styles.holderholder}>
        <div className={Styles.holder}>
            <div className={Styles.formholder}>
                    <label className={Styles.label}>Choose a level: </label>
                        <select onChange={(e)=>setChoice(e.target.value)} className={Styles.select}>
                            <option value="A1">A1</option> 
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>   
                        </select>
                    <button onClick={(e)=>{ setQuestionNumber(0)}} 
                    className={Styles.inputlevel}>TRY</button>
            </div>
            
        
            <div className={Styles.container}> 
                <div className={Styles.questionform}>
                    <h3>{customElements[questionnumber].q}</h3>
                {singlequestioninfo.map((entry, idi)=>(
                    <h3 id={entry.id} className={correctclass[idi]} onClick={(e)=>correct(e, idi)}>{entry.a}</h3>    
                   ))}
                </div> 
            </div> 
        </div>
    </div>


)


}

export default MultiTest;