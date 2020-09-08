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
            <div  className={Styles.entrycontainer}>
                    <div onClick={()=>Rotatenow()} className={Styles.entry} id="flashcard">
                        <div className={Styles.front}>
                            <h1 onMouseEnter={()=>speechSynthesis.speak(smith)}>{question}</h1>
                        </div>  
                        <div className={Styles.back}>
                            <h1>BACK</h1>
                        </div>  
                    </div>
            </div>






        </div>
            







    


)

}

export default FlashCard;