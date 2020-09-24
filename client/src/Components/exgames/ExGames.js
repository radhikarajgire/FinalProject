import React, {useEffect, useState, useContext, useRef} from "react";
import Styles from "./ExGames.module.css"
import { StateContext } from "../statecontext/stateContext";

function ExGames(){



return(
    <div>
        <iframe classNames={Styles.iframe} src="https://www.gamestolearnenglish.com/fast-vocab/embed.html" width="100%" height="550px" scrolling="no"></iframe>

    </div>


)

}

export default ExGames