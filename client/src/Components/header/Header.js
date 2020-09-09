import React from "react";
import Styles from "./Header.module.css"
//import Logo from ""

function Header(){





return(
<div className={Styles.holder}>
<header className={Styles.header}>  
    <img className={Styles.headerimg} src={require("../../assets/logo3R.png")} alt=""></img>  
    <h5>"LEARN ENGLISH SO THE BRITS DON'T HAVE TO LEARN ANYTHING FOREIGN"</h5>   
    <h1 className={Styles.headertext}>R3</h1>
  </header>
  </div>
)




}

export default Header;