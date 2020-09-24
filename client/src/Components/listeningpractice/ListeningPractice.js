import React, {useEffect, useState, useContext} from "react";
import Styles from "./ListeningPractice.module.css"
import ReactPlayer from 'react-player'
import { StateContext } from "../statecontext/stateContext";

function ListeningPractice(){
    const { listeningpractice } = useContext(StateContext);
    const [vidlistening, setVidListening] = useState()
    const [playvidlistening, setPlayVidListening] = useState(0)
    const [volsp, setVolsp] = useState(80)



return(
    

    <div className={Styles.holderholder}>
        <div className={Styles.holder} >    
            <div className={Styles.formholder}>
                    <select onChange={(e)=>{
                        setVidListening(e.target.value)
                        setPlayVidListening(true)
                        }} className={Styles.select}>
                        <option>Choose something, then go learn</option>
                    {listeningpractice.map((entry)=><option id={entry.id} value={entry.s}>{entry.descrip}</option>)}
                        
                    </select>
                    <button className={Styles.button} onClick={()=>{playvidlistening?setPlayVidListening(false):setPlayVidListening(true) }}>{playvidlistening?'stop': 'play'}</button>
            </div>  
            <div className={Styles.container}>
                {vidlistening?
                <ReactPlayer volume= {volsp} playing={playvidlistening} width='500px' height='300px' className={Styles.player} url={vidlistening}/>:<h3>In  your own words summarise</h3> }
            </div>   
            <div className={Styles.slidecontainer}>
                <h3 className={Styles.slidermarker}>Quiet</h3>
                <input onChange={(e)=>setVolsp(e.target.value)} type="range" min="0" max="100" value={volsp} className={Styles.slider} id="volRange" />
                <h3 className={Styles.slidermarker}>Loud</h3>
            </div>
            <div>
                <textarea id="studilistenpractice" name="stuidlistenpractice" rows="4" cols="50"> </textarea> 
                <button className={Styles.button} onClick={(e)=>{console.log('123') }}>Submit</button>
            </div>                               
        </div>
    </div>

)
        

}

export default ListeningPractice;