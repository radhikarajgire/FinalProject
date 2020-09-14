import React, {useEffect, useState, useContext} from "react";
import Styles from "./Snap.module.css"
import { StateContext } from "../statecontext/stateContext";


function Snap(){
const {customElements} = useContext(StateContext);
const [oneEntry, setOneEntry] = useState("");
const [entrylist, setEntryList]=useState([])
const [ident, setIdent]=useState(0)
const [tryagain, setTryAgain]=useState(false)
const [idcomp, setIDcomp]=useState()
const [rend, setRend]=useState()
const [choice, setChoice]=useState('A1');
const [correctclass, setCorrectClass]=useState()


function TryAgain(){
const newElementq=customElements.map((entry, id)=>{
    const container ={}
    container.idaq=id;
    container.qa=entry.q
    return container
    })
const newElementa=customElements.map((entry, id)=>{
    const container ={}
    container.idaq=id;
    container.qa=entry.a
    return container
})
const newElementall=newElementq.concat(newElementa)
shuffleArray(newElementall)
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
setOneEntry("")
setEntryList(newElementall)

var dataloop=[]
    var i
    for(i=0; i<8; i++){
        dataloop = dataloop.concat([Styles.element])
    }
    setCorrectClass(dataloop)


}

function correct(entry, e, aqid){
    if(tryagain){ 
    setIDcomp(aqid)
    setOneEntry(entry)
    setIdent(parseInt(e.target.id))
    setTryAgain(false)
} else{    
    setOneEntry(entry)
    setIdent(parseInt(e.target.id))
    setTryAgain(true)
    if(idcomp===aqid){
        const newdata=correctclass
        const goat = parseInt(e.target.id)       
        setEntryList((previous)=>[...previous, entrylist[ident]['qa']="", entrylist[goat]['qa']=""])
        newdata[ident]=Styles.elementblank
        newdata[goat]=Styles.elementblank
        setCorrectClass([...newdata])
    }else{
        setIDcomp(before=>before, "")
    }

}
}




return(

    <div className={Styles.holderholder}>
        <div className={Styles.holder}>
            <div className={Styles.formholder}>
                    <label className={Styles.label}>Choose a level: </label>
                        <select onChange={(e)=>setChoice(e.target.value)} className={Styles.select}>
                            <option value="A1">A1</option> 
                            <option value="A2">A2</option>
                            <option value="B1">B1</option>
                            <option value="B2">B2</option>
                            <option value="C1">C1</option>
                            <option value="C2">C2</option>   
                        </select>
                   <button className={Styles.button} onClick={()=>TryAgain() }>TRY</button>
            </div>
            
            <div className={Styles.container}>
                {entrylist?entrylist.map((entry, idn) =><div id={idn} className={correctclass[idn]} onClick={(e)=>{
                correct(entry.qa, e, entry.idaq)}}>{ident===idn?<h4>{oneEntry}</h4>:""}</div>):""} 
            </div> 
        </div>
    </div>


)


}

export default Snap;