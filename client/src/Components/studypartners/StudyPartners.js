import React, {useContext, useState, useRef, useEffect} from "react";
import ReactPlayer from 'react-player'
import Styles from "./StudyPartners.module.css";
import { StateContext } from "../statecontext/stateContext";

function StudyPartners(){
const {choice, setChoice, playmusic, setPlayMusic, musicchoice, volsp, setVolsp} = useContext(StateContext);



return (

   

    <div className={Styles.holderholder}>
        <div className={Styles.holder} >    
            <div className={Styles.formholder}>
                        <select onChange={(e)=>{
                            setChoice(e.target.value)
                            setPlayMusic(true)
                            }} className={Styles.select}>
                            <option>Choose something, then go learn</option>
                        {musicchoice.map((entry)=><option id={entry.id} value={entry.m}>{entry.t}</option>)}
                            
                        </select>
                        <button className={Styles.button} onClick={()=>{playmusic?setPlayMusic(false):setPlayMusic(true) }}>{playmusic?'stop': 'play'}</button>
            </div>  
                <div className={Styles.container}>
                    {choice.length?
                    <ReactPlayer volume= {0} playing={playmusic} width='800px' height='480px' controls={true} className={Styles.player} url={choice}/>:<h3>Use the Pomodero method to help you study or listen to some study music</h3> }
                </div>   
                <div className={Styles.slidecontainer}>
                    <h3 className={Styles.slidermarker}>Quiet</h3>
                    <input onChange={(e)=>setVolsp(e.target.value)} type="range" min="0" max="100" value={volsp} className={Styles.slider} id="volRange" />
                    <h3 className={Styles.slidermarker}>Loud</h3>
                </div>                              
        </div>
    </div>
    
)




}


export default StudyPartners