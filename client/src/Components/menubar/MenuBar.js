import React, {useState, useEffect} from "react";
import Styles from "./MenuBar.module.css"



function Menubar(){
const [showlearn, setShowLearn]=useState(Styles.hidelearn)
const [showreview, setShowReview]=useState(Styles.hidereview)
const [showtest, setShowTest]=useState(Styles.hidetest)
const [showgame, setShowGame]=useState(Styles.hidegame)
const [myleft, setMyleft] = useState()

useEffect(()=>{
setTimeout(()=>{     
const pos = document.getElementById("learn").getBoundingClientRect().width
console.log(pos)}, 10000)
}, [])

//onMouseLeave={()=>setShowLearn(Styles.hidelearn)}

return (
    <div className={Styles.holder}>
        
        <div className={Styles.container}>
            <h2 id="learn" onMouseEnter={()=>{
                setShowLearn(Styles.showlearn);
                const leftme = document.getElementById("learn").getBoundingClientRect().x
                setMyleft(leftme)
            }} onMouseLeave={()=>setShowLearn(Styles.hidelearn)}>Learn</h2>       
            <h2 id="review" onMouseEnter={(e)=>{
                setShowReview(Styles.showreview)
                const leftme = document.getElementById("review").getBoundingClientRect().x
                setMyleft(leftme)
                }} onMouseLeave={()=>setShowReview(Styles.hidereview)}>Review</h2>
            <h2 id="test" onMouseEnter={(e)=>{
                setShowTest(Styles.showtest)
                const leftme = document.getElementById("test").getBoundingClientRect().x
                setMyleft(leftme)
                }} onMouseLeave={()=>setShowTest(Styles.hidetest)}>Test</h2>
            <h2 id="game" onMouseEnter={()=>{
                setShowGame(Styles.showgame)
                const leftme = document.getElementById("game").getBoundingClientRect().x
                setMyleft(leftme)
                }} onMouseLeave={()=>setShowGame(Styles.hidegame)}>Games</h2>
        </div>
        <div className={showlearn} style={{left: myleft}} onMouseEnter={()=>setShowLearn(Styles.showlearn)} onMouseLeave={()=>setShowLearn(Styles.hidelearn)}>
            <ul className={Styles.menulist}>
                <li>Path</li>
                <li>Current</li>
                <li>Done</li>
            </ul>          
        </div>
        <div className={showreview} style={{left: myleft}} onMouseEnter={()=>setShowReview(Styles.showreview)} onMouseLeave={()=>setShowReview(Styles.hidereview)}>
            <ul className={Styles.menulist}>
                <li>Flashcards</li>
                <li>Snap</li>
                <li>Wordsearch</li>
            </ul>
        </div>
        <div className={showtest} style={{left: myleft}} onMouseEnter={()=>setShowTest(Styles.showtest)} onMouseLeave={()=>setShowTest(Styles.hidetest)}>
            <ul className={Styles.menulist}>
                <li>Score</li>
                <li>Last</li>
                <li>Next</li>
            </ul>    
        </div>
        <div className={showgame} style={{left: myleft}} onMouseEnter={()=>setShowGame(Styles.showgame)} onMouseLeave={()=>setShowGame(Styles.hidegame)}>
            <ul className={Styles.menulist}>
                <li>Spellshot</li>
                <li>Spellbee</li>
                <li>Countdown</li>
            </ul>
        </div>
    </div>

)    
}

export default Menubar;