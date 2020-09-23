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
    const [activeTimeout, setActiveTimeout] = useState("")

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        contextRef.current = context;
        document.addEventListener('keydown', moveblockshoot)
        return ()=>{document.removeEventListener('keydown', moveblockshoot)}
        
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
            const rnvelx = Math.floor((Math.random()*6)-3)
            const rnvely = Math.floor((Math.random()*6)-3) 
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
        setActiveTimeout(clearTimeout(activeTimeout))
        setActiveTimeout(setInterval(()=>{
            setLoopi(bef=>bef+1)
        }, 10))
    }

    useEffect(()=>{
        if (!startpos.length||!singleword.length) {
            return};
  
        const wordy=singleword
        const davetwo=startpos
        
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
        var zz
        for(zz=0;zz<wordy.length;zz++){
        if(wordy.length === davetwo.length){
        if(davetwo[zz]['xx']+20>shotpos+25&&shotpos+25>davetwo[zz]['xx']-20&&davetwo[zz]['yy']+20>shotY&&shotY>davetwo[zz]['yy']-20){
            setShooting(false)
            var newwordstart=wordy.slice(0, zz)          
            var newwordend=wordy.slice(zz+1)
            var newword = newwordstart.concat(newwordend)
            setSingleWord(newword)
            davetwo.splice(zz,1)
            setStartPos(davetwo)
            if(davetwo.length===0){
                console.log("finished")
                contextRef.current.clearRect(0, 0, 800, 500)
                contextRef.current.fillText( 'FINISHED TRY AGAIN', 300, 300)

            }
            console.log("hit")}
        }}
        
        if(shotY>0){
        setShotY(shotY-5)}
            else {
                setShotY(500)
                setShooting(false)
            }}
        
    }, [singleword, blockpos, loopi])

    useEffect(()=>{

        setShotPos(blockpos)



    },[blockpos])

    function moveblockshoot({key}){

        if(key==='ArrowRight'){
           setBlockPos(before=>{if(before<750){return before+10} return before}) 
        }

        else if (key==='ArrowLeft'){    
            setBlockPos(before=>{if(before>0){return before-10} return before})
        }

        else if (key ==='ArrowUp'){
           
            setShotY(500)
            setShooting(true)
        }
        else{}

    }
   
   
    return(
        <div className={Styles.holder}>
            <div className={Styles.header} >  
                <div className={Styles.formholder} >                        
                        <h4>{singleword}</h4>  
                       <button className={Styles.button} onClick={()=>positionthings() }>TRY</button>
                        <h5>Use LEFT ARROW or RIGHT ARROW to move, UPARROW to shoot</h5>
                </div>
                <div>
                    <canvas   ref={canvasRef} className={Styles.canvas} width="800px" height="500px"></canvas>
                </div>
                
            </div>
        </div>
        )
        
        
        
        
        }
        
        export default SpellShot;