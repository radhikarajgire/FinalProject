import React, {useContext, useState, useRef, useEffect} from "react";
import Styles from "./SpellShot.module.css";
import { StateContext } from "../statecontext/stateContext";



// a game on canvas to shoot your way to the correct spelling

function SpellShot(){
    const contextRef = useRef(null);
    const canvasRef = useRef(null);
    const [choice, setChoice] = useState()
    const {words} = useContext(StateContext);
    const [pos, setPos]= useState([])
    const [blockpos, setBlockPos] = useState(300)
    const [singleword, setSingleWord] = useState('Please')
    const [shot, setShot] = useState()
    const [startpos, setStartPos] = useState([])
    const [loopi, setLoopi] = useState(0)
    const [shotpos, setShotPos] = useState()
    const [shotY, setShotY] = useState(500)
    const [shooting, setShooting] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        contextRef.current = context;
        
      }, []);

    function positionthings(){
        const ranword = Math.floor((Math.random()*(words.length-1)))
        contextRef.current.clearRect(0, 0, 800, 500);
        contextRef.current.font = "bold 18px Arial";
        contextRef.current.fillStyle = "red";
        var dave=[]
        const steve = words[ranword]
        setSingleWord(steve)
        function redo(ii){  
            const randomnums = Math.floor((Math.random() * 740)+20);
            const randomnumh = Math.floor((Math.random() * 460)+20);
            const rnvelx = Math.floor((Math.random()*10)-5)
            const rnvely = Math.floor((Math.random()*10)-5) 
            dave=[...dave, {xx: randomnums, yy: randomnumh, velx: rnvelx, vely: rnvely}]
            contextRef.current.fillText(steve[ii], randomnums-5, randomnumh+5)
            contextRef.current.beginPath();
            contextRef.current.lineWidth="4";
            contextRef.current.strokeStyle="blue";
            contextRef.current.arc(randomnums, randomnumh, 15, 0, 2 * Math.PI);
            contextRef.current.stroke();
             }       
        var i=0
        for(i=0; i<steve.length;i++){
        redo(i)  
        ;}
        setStartPos(dave)
        var i
        clearInterval(myvar)
        var myvar = setInterval(()=>{
             i=i+1
            setLoopi(i)
        }, 10)
        //setTimeout(()=>{
       // movethings(dave, steve)}, 1000)
    }

    useEffect(()=>{
        if (!startpos.length||!singleword.length) {
            return};
    //movethings(startpos, singleword)
    //function movethings(john, stephan){
        var wordy=singleword
        var davetwo=startpos
        //setInterval(()=>{
        setStartPos(prevPos=>startpos.map((entry)=> {
            if(entry['xx']>785||entry['xx']<15){return {xx: entry['xx']-entry['velx'], yy: entry['yy']-entry['vely'], velx: -entry['velx'], vely: entry['vely']}}
            else if(entry['yy']>485||entry['yy']<15){return {xx: entry['xx']-entry['velx'], yy: entry['yy']-entry['vely'], velx: entry['velx'], vely: -entry['vely']}}
           else{return {xx: entry['xx']+entry['velx'], yy: entry['yy']+entry['vely'], velx: entry['velx'], vely: entry['vely']}}
        }))

        contextRef.current.clearRect(0, 0, 800, 500);  
        var i=0    
        
        for(i=0; i<wordy.length; i++){
        
        contextRef.current.fillText( wordy[i], davetwo[i]['xx']-5, davetwo[i]['yy']+5)
        contextRef.current.beginPath();
        contextRef.current.lineWidth="4";
        contextRef.current.strokeStyle="blue";
        contextRef.current.arc(davetwo[i]['xx'], davetwo[i]['yy'], 15, 0, 2 * Math.PI);
        contextRef.current.fillRect(blockpos, 490, 50, 10)
        contextRef.current.stroke();}
        
        if (shooting){
        contextRef.current.fillRect(shotpos+20, shotY, 10, 10)
        var i
        for(i=0;i<wordy.length;i++){
        if(startpos[i]['xx']+10>shotpos&&shotpos>startpos[i]['xx']-10&&startpos[i]['yy']+10>shotY&&shotY>startpos[i]['yy']-10){
            setShooting(false)
            var newwordstart=wordy.slice(0, i)          
            var newwordend=wordy.slice(i+1)
            var newword = newwordstart.concat(newwordend)
            setSingleWord(newword)
            console.log("hit")
        }}
        
        if(shotY>0){
        setShotY(shotY-5)}
            else {
                setShotY(500)
                setShooting(false)
            }}
        //setTimeout(()=>{  
        //movethings(davetwo, wordy)}, 50)

    //}tt
    }, [singleword, blockpos, loopi])

    function moveblockshoot(event){
        if(event==='h'){
            if(blockpos<750){
            setBlockPos(before=>before+10) 
        }
        }
        else if (event==='d'){
            if(blockpos>0){
            setBlockPos(before=>before-10)}

        }
        else if (event ==='t'){
            setShotPos(blockpos)
            setShotY(500)
            setShooting(true)
        }
        else{}

    }
    /*<select onChange={(e)=>setChoice(e.target.value)} className={Styles.select}>
    <option value="A1">A1</option> 
    <option value="A2">A2</option>
    <option value="B1">B1</option>
    <option value="B2">B2</option>
    <option value="C1">C1</option>
    <option value="C2">C2</option>   <label className={Styles.label}>Choose a level: </label>
</select>*/

    return(
        <div className={Styles.holder}>
            <div className={Styles.header} onKeyDown ={(e)=>moveblockshoot(e.key)}>  
                <div className={Styles.formholder} >                        
                        <h4>{singleword}</h4>  
                       <button className={Styles.button} onClick={()=>positionthings() }>TRY</button>
                        <h4>{shot}</h4>
                </div>
                <div>
                    <canvas  ref={canvasRef} className={Styles.canvas} width="800px" height="500px"></canvas>
                </div>
                
            </div>
        </div>
        )
        
        
        
        
        }
        
        export default SpellShot;