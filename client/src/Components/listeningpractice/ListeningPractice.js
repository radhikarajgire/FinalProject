import React, {useEffect, useState, useContext} from "react";
import Styles from "./ListeningPractice.module.css"
import { StateContext } from "../statecontext/stateContext";

function ListeningPractice(){
    const { customElements } = useContext(StateContext);

return(
    <div>
        <h4>Hello</h4>

    </div>

)
}

export default ListeningPractice;