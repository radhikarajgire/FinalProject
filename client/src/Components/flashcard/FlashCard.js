import React, {useEffect, useState} from "react";
import Styles from "./FlashCard.module.css"

function FlashCard(){
    const [rotpost, setRotPost] = useState(true)
    const [question, setQuestion] = useState('What is the capital of France')
    //const {oneEntry, setRateShow}=useContext(StateContext);
    const [smith, setSmith] = useState()
    //const [freeEntry, setFreeEntry]=useState([])
    //const iFrame=useRef(null)

   
    

    useEffect(()=>{
        //const newRots = oneEntry.map(() => 0)
        //setRotPost(newRots) 
        //setRateShow(false)
        //setSmith(Styles.down)
        //setFreeEntry(oneEntry)
       
        const voices=window.speechSynthesis.getVoices()
        const utterance = new SpeechSynthesisUtterance(question);
        utterance.pitch=1;
        utterance.volume=1; 
        utterance.rate=0.8;
        utterance.lang='en-GB';
        console.log(voices)
        utterance.voice=voices[0];    
        setSmith(utterance)   
       
        console.log(question.length)
         
        
        }, [question])


    function Rotatenow(){
        const fish=document.getElementById("flashcard").classList
        if (rotpost) {setRotPost(false)}
        else{setRotPost(true)}
            
        if(rotpost){
            
            fish.remove(Styles.extra)
            fish.add(Styles.rotatback);
        } else {
            fish.remove(Styles.rotatback);
            fish.add(Styles.extra);
        } 
        
    }


return( 
        <div className={Styles.holder}>
            <div className={Styles.flashnav}>
                <div className={Styles.clickbutton}>Previous</div>
                <form>
                    <label className={Styles.label}>Choose a level: </label>
                    <select className={Styles.select}>
                        <option value="A1">A1</option> 
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>   
                    </select>
                    <input className={Styles.inputlevel} type="submit" value="Choose"></input>
                </form>
                <div className={Styles.clickbutton}>Next</div>
            </div>
            <div  className={Styles.entrycontainer}>
                    <div onClick={()=>Rotatenow()} className={Styles.entry} id="flashcard">
                        <div className={Styles.front}>
                            <div className={Styles.textholder}>
                                <h1 onMouseOver={()=>speechSynthesis.speak(smith)}>{question}</h1>
                            </div>
                        </div>  
                        <div className={Styles.back}>
                            <div className={Styles.textholder}>
                                <h1>BACK</h1>
                            </div>
                        </div>  
                    </div>
            </div>

        </div>
            







    


)

}

export default FlashCard;