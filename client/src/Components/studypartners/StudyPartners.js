import React, {useContext, useState, useRef, useEffect} from "react";
import ReactPlayer from 'react-player'
import Styles from "./StudyPartners.module.css";
import { StateContext } from "../statecontext/stateContext";

function StudyPartners(){
const {choice, setChoice, playmusic, setPlayMusic} = useContext(StateContext);

//useEffect(()=>{




//},[])


function LoadVid(){
    console.log('123')

}






return (

   

    <div className={Styles.holderholder}>
        <div className={Styles.holder} >    
            <div className={Styles.formholder}>
                        <select onChange={(e)=>{
                            setChoice(e.target.value)
                            setPlayMusic(true)
                            }} className={Styles.select}>
                            <option>Choose something, then go learn</option>
                            <option value="https://www.youtube.com/watch?v=cIXCnZ_jg30&t=23s">Study with me, music</option> 
                            <option value="https://www.youtube.com/watch?reload=9&v=1Cv0kCB59J4">Study with me, quiet</option>
                            <option value="https://www.youtube.com/watch?v=sUuNcYxocIQ">Study-bootcamp</option>
                            <option value="https://www.youtube.com/watch?v=sjkrrmBnpGE">Ambient music</option>
                            <option value="https://www.youtube.com/watch?v=kMAOey45mJI">Piano music</option>
                            <option value="https://www.youtube.com/watch?v=M5QY2_8704o">Coding music</option> 
                            <option value="https://www.youtube.com/watch?v=a4fv-BtzNmY">Electronic</option>  
                            <option value="https://www.youtube.com/watch?v=eGwhAwWGcOI&t=19s">Insturmental Rock</option>
                        </select>
                        <button className={Styles.button} onClick={()=>setPlayMusic(false) }>Stop</button>
            </div>  
                <div className={Styles.container}>
                    {choice.length?
                    <ReactPlayer volume="0" playing={playmusic} width='800px' height='500px' controls='true' className={Styles.player} url={choice}/>:<h3>Use the Pomodero method to help you study or listen to some study music</h3> }
                </div>                                 
        </div>
    </div>
    
)




}


export default StudyPartners