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
        setEntryList(...entrylist, entrylist[parseInt(e.target.id)].qa="", entrylist[ident].qa="")
    }else{
        setIDcomp(before=>before, "")
    }

}
}

function rendersnap(){
    setRend()

}


return(
    <div className={Styles.holder}>
        <button className={Styles.button} onClick={()=>TryAgain() }>TRY</button>
        <div className={Styles.container}>
            {entrylist?entrylist.map((entry, idn) =><div id={idn} className={Styles.element} onClick={(idi)=>{correct(entry.qa, idi, entry.idaq)}}>{ident===idn?oneEntry:""}</div>):""}  
        </div> 
    </div>



)


}

export default Snap;