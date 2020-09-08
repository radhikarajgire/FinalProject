import React, {useState} from "react";
import Styles from "./MenuBar.module.css"



function Menubar(){
const [showlearn, setShowLearn]=useState(Styles.hidelearn)
const [showreview, setShowReview]=useState(Styles.hidereview)
const [showtest, setShowTest]=useState(Styles.hidetest)
const [showgame, setShowGame]=useState(Styles.hidegame)



//onMouseLeave={()=>setShowLearn(Styles.hidelearn)}

return (
    <div className={Styles.holder}>
        
        <div className={Styles.container}>
            <h2 id="learn" onMouseEnter={()=>setShowLearn(Styles.showlearn)} onMouseLeave={()=>setShowLearn(Styles.hidelearn)}>Learn</h2>       
            <h2 id="review" onMouseEnter={()=>setShowReview(Styles.showreview)} onMouseLeave={()=>setShowReview(Styles.hidereview)}>Review</h2>
            <h2 id="test" onMouseEnter={()=>setShowTest(Styles.showtest)} onMouseLeave={()=>setShowTest(Styles.hidetest)}>Test</h2>
            <h2 id="game" onMouseEnter={()=>setShowGame(Styles.showgame)} onMouseLeave={()=>setShowGame(Styles.hidegame)}>Games</h2>
        </div>
        <div className={showlearn} onMouseEnter={()=>setShowLearn(Styles.showlearn)} onMouseLeave={()=>setShowLearn(Styles.hidelearn)}>
            <ul className={Styles.menulist} >
                <li>Path</li>
                <li>Current</li>
                <li>Done</li>
            </ul>          
        </div>
        <div className={showreview} onMouseEnter={()=>setShowReview(Styles.showreview)} onMouseLeave={()=>setShowReview(Styles.hidereview)}>
            <ul className={Styles.menulist}>
                <li>Flashcards</li>
                <li>Snap</li>
                <li>Wordsearch</li>
            </ul>
        </div>
        <div className={showtest} onMouseEnter={()=>setShowTest(Styles.showtest)} onMouseLeave={()=>setShowTest(Styles.hidetest)}>
            <ul className={Styles.menulist}>
                <li>Score</li>
                <li>Last</li>
                <li>Next</li>
            </ul>    
        </div>
        <div className={showgame} onMouseEnter={()=>setShowGame(Styles.showgame)} onMouseLeave={()=>setShowGame(Styles.hidegame)}>
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