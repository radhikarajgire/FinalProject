import React, {useEffect, useState} from "react";
import Styles from "./FlashCard.module.css"

function FlashCard(){
    const [rotpost, setRotPost] = useState(true)
    //these should be changed to be entries from our DB (extracted from Entries - need to then display the chosen card choice)
    const [question, setQuestion] = useState('What is the capital of France')
    const [answer, setAnswer] = useState('Paris')
    const [smith, setSmith] = useState()
    const [schmidt, setSchmidt]=useState()
    const [card, setCard] = useState()
    //Entries is the complete data set from the DB
    const [entries, setEntries]=useState("A1")
    //Use choice of which level to do
    const [choice, setChoice]=useState("A1")

   
    

    useEffect(()=>{  
        //to be used when we have more than one card
        /*if(card===question.length){
            setCard(0)
        } else if (card===0){
            setCard(question.length)
        }*/


        const utterance = new SpeechSynthesisUtterance(question);
        utterance.pitch=1;
        utterance.volume=1; 
        utterance.rate=0.8;
        utterance.lang='en-GB';   
        setSmith(utterance) 

        const utter = new SpeechSynthesisUtterance(answer);
        utter.pitch=1;
        utter.volume=1; 
        utter.rate=0.8;
        utter.lang='en-GB';   
        setSchmidt(utter) 
        console.log(question.length)
         
        
        }, [question, answer, card])


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
    //setFilteredEntries(entries.filter(entry =>{return entry.level.toLowerCase().includes(choice.toLowerCase())}) )

return( 
        <div className={Styles.holder}>
            <div className={Styles.flashnav}>
                <div onClick={()=>setCard(card-1)} className={Styles.clickbutton}>Previous</div>
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
                    <input onClick={(e)=>console.log(e.value) } className={Styles.inputlevel} type="submit" value="Choose"></input>
                </form>
                <div onClick={()=>setCard(card+1)} className={Styles.clickbutton}>Next</div>
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
                                <h1 onMouseOver={()=>speechSynthesis.speak(schmidt)}>{answer}</h1>
                            </div>
                        </div>  
                    </div>
            </div>

        </div>
            







    


)

}

export default FlashCard;