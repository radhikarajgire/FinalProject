import React, {useState, useEffect, useContext} from "react";
import Styles from "./MenuBar.module.css"
import { StateContext } from "../statecontext/stateContext";



function Menubar(){
const {setMenuItem} = useContext(StateContext);
const [showlearn, setShowLearn]=useState(Styles.hidelearn)
const [showreview, setShowReview]=useState(Styles.hidereview)
const [showtest, setShowTest]=useState(Styles.hidetest)
const [showgame, setShowGame]=useState(Styles.hidegame)
const [showmethod, setShowMethod]=useState(Styles.hidemethod)
const [showgeneral, setShowGeneral]=useState(Styles.hidegeneral)
const [myleftlearn, setMyleftLearn] = useState(-200)
const [myleftreview, setMyleftReview] = useState(-200)
const [mylefttest, setMyleftTest] = useState(-200)
const [myleftgame, setMyleftGame] = useState(-200)
const [myleftmethod, setMyleftMethod] = useState(-200)
const [myleftgeneral, setMyleftGeneral] = useState(-200)

//useEffect(()=>{
//setTimeout(()=>{     
//const pos = document.getElementById("learn").getBoundingClientRect().width
//console.log(pos)}, 10000)
//}, [])

//onMouseLeave={()=>setShowLearn(Styles.hidelearn)}

return (
    <div className={Styles.holder}>
        
        <div className={Styles.container}>
            <h2 id="learn" onMouseEnter={()=>{
                setShowLearn(Styles.showlearn);
                const leftmelearn = document.getElementById("learn").getBoundingClientRect().x
                setMyleftLearn(leftmelearn)
            }} onMouseLeave={()=>setShowLearn(Styles.hidelearn)}>Learn</h2>       
            <h2 id="review" onMouseEnter={(e)=>{
                setShowReview(Styles.showreview)
                const leftmereview = document.getElementById("review").getBoundingClientRect().x
                setMyleftReview(leftmereview)
                }} onMouseLeave={()=>setShowReview(Styles.hidereview)}>Review</h2>
            <h2 id="test" onMouseEnter={(e)=>{
                setShowTest(Styles.showtest)
                const leftmetest = document.getElementById("test").getBoundingClientRect().x
                setMyleftTest(leftmetest)
                }} onMouseLeave={()=>setShowTest(Styles.hidetest)}>Test</h2>
            <h2 id="game" onMouseEnter={()=>{
                setShowGame(Styles.showgame)
                const leftmegame = document.getElementById("game").getBoundingClientRect().x
                setMyleftGame(leftmegame)
                }} onMouseLeave={()=>setShowGame(Styles.hidegame)}>Games</h2>
            <h2 id="method" onMouseEnter={()=>{
                setShowMethod(Styles.showmethod)
                const leftmemethod = document.getElementById("method").getBoundingClientRect().x
                setMyleftMethod(leftmemethod)
                }} onMouseLeave={()=>setShowMethod(Styles.hidemethod)}>Method</h2>
            <h2 id="general" onMouseEnter={()=>{
                setShowGeneral(Styles.showgeneral)
                const leftmegeneral = document.getElementById("general").getBoundingClientRect().x
                setMyleftGeneral(leftmegeneral)
                }} onMouseLeave={()=>setShowGeneral(Styles.hidegeneral)}>General</h2>
        </div>
        <div className={showlearn} style={{left: myleftlearn}} onMouseEnter={()=>setShowLearn(Styles.showlearn)} onMouseLeave={()=>{
            setShowLearn(Styles.hidelearn)
            setMyleftLearn(-200)
            }}>
            <ul className={Styles.menulist}>
                <li>Path</li>
                <li>Current</li>
                <li>Done</li>
            </ul>          
        </div>
        <div className={showreview} style={{left: myleftreview}} onMouseEnter={()=>setShowReview(Styles.showreview)} onMouseLeave={()=>{
            setMyleftReview(-200)
            setShowReview(Styles.hidereview)}}>
            <ul className={Styles.menulist}>
                <li onClick={(e)=>setMenuItem('ba')}>Flashcards</li>
                <li onClick={()=>setMenuItem('bb')}>Snap</li>
                <li onClick={()=>setMenuItem('bc')}>Wordsearch</li>
            </ul>
        </div>
        <div className={showtest} style={{left: mylefttest}} onMouseEnter={()=>setShowTest(Styles.showtest)} onMouseLeave={()=>{
            setMyleftTest(-200)
            setShowTest(Styles.hidetest)}}>
            <ul className={Styles.menulist}>
                <li>Score</li>
                <li onClick={()=>setMenuItem('cb')}>Last</li>
                <li>Next</li>
            </ul>    
        </div>
        <div className={showgame} style={{left: myleftgame}} onMouseEnter={()=>setShowGame(Styles.showgame)} onMouseLeave={()=>{
            setMyleftGame(-200)
            setShowGame(Styles.hidegame)}}>
            <ul className={Styles.menulist}>
                <li>Spellshot</li>
                <li>Spellbee</li>
                <li>Countdown</li>
                <li>PoshorNot</li>
            </ul>
        </div>
        <div className={showmethod} style={{left: myleftmethod}} onMouseEnter={()=>setShowMethod(Styles.showmethod)} onMouseLeave={()=>{
            setMyleftMethod(-200)
            setShowMethod(Styles.hidemethod)}}>
            <ul className={Styles.menulist}>
                <li>Learn-Methods</li>
                <li>Learn-Music</li>
                <li>Study-Partners</li>
            </ul>
        </div>
        <div className={showgeneral} style={{left: myleftgeneral}} onMouseEnter={()=>setShowGeneral(Styles.showgeneral)} onMouseLeave={()=>{
            setMyleftGeneral(-200)
            setShowGeneral(Styles.hidegeneral)}}>
            <ul className={Styles.menulist}>
                <li>Dictionary</li>
                <li>Thesaurous</li>
                <li></li>
            </ul>
        </div>
    </div>

)    
}

export default Menubar;