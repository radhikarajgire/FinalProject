import React, { useContext, useState, useRef, useEffect } from "react";
import Styles from "./Match.module.css";
import { StateContext } from "../statecontext/stateContext";

//match a game on canvas to match up the position of question answers
function Match() {
  const contextRef = useRef(null);
  const canvasRef = useRef(null);
  const [choice, setChoice] = useState(0);
  const { customElements, referencedata } = useContext(StateContext);
  const [pos, setPos] = useState([]);
  const [textpos, setTextPos] = useState([]);
  const [movingelement, setMovingElement] = useState([]);
  const [found, setFound] = useState(false);
  //const [poscomp, setPosComp] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
  }, []);

  useEffect(() => {
    if (!pos.length) return;
    contextRef.current.clearRect(0, 0, 800, 500);
    var i = 0;
    for (i = 0; i < 8; i++) {
      const fishy = textpos[i];
      const sammy = pos[i];
      contextRef.current.fillText(fishy, sammy["xx"] + 5, sammy["yy"] + 20);
      contextRef.current.beginPath();
      contextRef.current.strokeStyle = "blue";
      contextRef.current.rect(
        sammy["xx"],
        sammy["yy"],
        sammy["leng"],
        sammy["hei"]
      );
      contextRef.current.stroke();
    }
    setFound(false);
    setMovingElement();
  }, [pos]);

  function positionthings() {
    contextRef.current.clearRect(0, 0, 800, 500);
    contextRef.current.font = "bold 18px Arial";
    contextRef.current.fillStyle = "red";
    setPos([]);
    setTextPos([]);

    function redo(a, b) {
      const long = Math.floor(
        contextRef.current.measureText(referencedata[choice][a][b]).width
      );
      const randomnums = Math.floor(Math.random() * (780 - long));
      const randomnumh = Math.floor(Math.random() * 460);
      const fishy = referencedata[choice][a][b];
      console.log(referencedata);
      setTextPos((bef) => [...bef, fishy]);
      setPos((before) => [
        ...before,
        { xx: randomnums - 5, yy: randomnumh, leng: long + 10, hei: 30 },
      ]);
      contextRef.current.fillText(fishy, randomnums, randomnumh + 20);
      contextRef.current.beginPath();
      contextRef.current.lineWidth = "4";
      contextRef.current.strokeStyle = "blue";
      contextRef.current.rect(randomnums - 5, randomnumh, long + 10, 30);
      contextRef.current.stroke();
    }
    var u = 0;
    for (u = 0; u < 2; u++) {
      const flipchip = ["a", "q"];
      const z = flipchip[u];

      for (let i = 1; i < 5; i++) {
        redo(i, z);

        //var n=0
        //for(n=0;n<i;n++){
        //console.log(pos)
        //console.log(n)
        //if((pos[n]['xx']<randomnums)&&(randomnums<(pos[n]['xx']+pos[n]['leng']))&&((pos[n]['yy']-30)<randomnumh)&&(randomnumh<pos[n]['yy'])){
        //||(pos[n][x]<randomnums<(pos[n][x]+pos[n][leng]))&&(<<)
        //||((pos[n][y]-30)<randomnumh<pos[n][y])||((pos[n][y]-30)<randomnumh<pos[n][y])){
        // console.log("123")
        // redo()
        // }
        //console.log('2334')}
      }
    }
    //contextRef.current.drawImage(imgicon, nativeEvent.offsetX-40, nativeEvent.offsetY-40, 80, 80)
  }

  function startMoving({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;
    console.log(pos);
    var i = 0;
    for (i = 0; i < pos.length; i++) {
      if (
        pos[i]["xx"] < offsetX &&
        offsetX < pos[i]["xx"] + pos[i]["leng"] &&
        pos[i]["yy"] < offsetY &&
        offsetY < pos[i]["yy"] + pos[i]["hei"]
      ) {
        setFound(true);
        setMovingElement(i);
      }
    }
  }

  function moveBy({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;
    if (found) {
      contextRef.current.clearRect(0, 0, 800, 500);

      var i = 0;
      for (i = 0; i < pos.length; i++) {
        const fish = pos[i];
        if (i === movingelement) {
          contextRef.current.fillText(textpos[i], offsetX + 5, offsetY + 20);
          contextRef.current.beginPath();
          contextRef.current.lineWidth = "4";
          contextRef.current.strokeStyle = "blue";
          contextRef.current.rect(offsetX, offsetY, fish["leng"], fish["hei"]);
          contextRef.current.stroke();
        } else {
          contextRef.current.fillText(
            textpos[i],
            fish["xx"] + 5,
            fish["yy"] + 20
          );
          contextRef.current.beginPath();
          contextRef.current.lineWidth = "4";
          contextRef.current.strokeStyle = "blue";
          contextRef.current.rect(
            fish["xx"],
            fish["yy"],
            fish["leng"],
            fish["hei"]
          );
          contextRef.current.stroke();
        }
      }
    }
  }

  function finishMove({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;
    if (movingelement !== []) {
      var secondelement;
      if (movingelement < pos.length / 2) {
        secondelement = movingelement + pos.length / 2;
        reload(secondelement);
      } else {
        secondelement = movingelement - pos.length / 2;
        reload(secondelement);
      }

      function reload(e) {
        const chip = pos[e];

        if (chip === undefined) {
          return;
        }

        if (
          chip["xx"] < offsetX &&
          chip["yy"] < offsetY &&
          offsetX < chip["xx"] + chip["leng"] &&
          offsetY < chip["yy"] + chip["hei"]
        ) {
          const maybe = { xx: -200, yy: -200, leng: 0, hei: 30 };

          setPos((prevPos) =>
            pos.map((item, index) => {
              if (index === movingelement || index === e) {
                return maybe;
              }
              return item;
            })
          );
        } else {
          setFound(false);
          setMovingElement();
        }
      }
    } else {
      console.log("nothing");
    }
  }

  return (
    <div className={Styles.holder}>
      <div className={Styles.header}>
        <div className={Styles.formholder}>
          <label className={Styles.label}>Choose a level: </label>
          <select
            onChange={(e) => setChoice(e.target.value)}
            className={Styles.select}
          >
            {referencedata
              ? referencedata.map((entry, idk) => (
                  <option key={idk} value={idk}>
                    {entry[0]["qadata"]}
                  </option>
                ))
              : ""}
          </select>
          <button className={Styles.button} onClick={() => positionthings()}>
            TRY
          </button>
        </div>
        <canvas
          onMouseDown={(e) => startMoving(e)}
          onMouseMove={(e) => moveBy(e)}
          onMouseUp={(e) => finishMove(e)}
          ref={canvasRef}
          className={Styles.canvas}
          width="800px"
          height="500px"
        ></canvas>
      </div>
    </div>
  );
}

export default Match;
