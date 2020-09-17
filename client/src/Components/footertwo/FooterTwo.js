import React from "react";
import Styles from "./FooterTwo.module.css"
import SocialFollow from ".././socialfollow/SocialFollow.js"
//import Logo from ""

function Footertwo(){





return(
<div className={Styles.holder}>
<header className={Styles.header}>  
    <SocialFollow />   
    <h1 className={Styles.headertext}>R3</h1>
  </header>
  </div>
)




}

export default Footertwo;