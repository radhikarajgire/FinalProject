import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "./SocialFollow.module.css"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class={Styles.socialcontainer}>
      <h6>FOLLOW US</h6>
      <a
        target="_blank"
        href="https://www.youtube.com/c/jamesqquick"
        className={Styles.youtube}
      >
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/learnbuildteach/"
        className={Styles.facebook}
      >
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a
        target="_blank"
        href="https://www.twitter.com/jamesqquick"
        className={Styles.twitter}
      >
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/learnbuildteach"
        className={Styles.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
}
