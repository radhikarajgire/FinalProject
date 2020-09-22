import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  const [menuitem, setMenuItem] = useState();
  const [choice, setChoice] = useState('')
  const [playmusic, setPlayMusic] = useState(true)
  const [volsp, setVolsp] = useState(100)
  

    const customElements=[{q:"A four leged friend", a: "dog", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"A moody house pet", a:"cat", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"Lives in the sea", a:"fish", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"Worm like", a:"snake", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}]
    
    const words=['fish', 'chips', 'dogs', 'cats', 'raining', 'fishing', 'sausages', 'dictator']

    const musicchoice=[{m: "https://www.youtube.com/watch?v=cIXCnZ_jg30&t=23s",t: 'Study with me, music'},{m:"https://www.youtube.com/watch?reload=9&v=1Cv0kCB59J4", t:'Study with me, quiet'},{m:"https://www.youtube.com/watch?v=sUuNcYxocIQ", t:'Study-bootcamp'},{m:"https://www.youtube.com/watch?v=sjkrrmBnpGE", t:'Ambient music'},{m:"https://www.youtube.com/watch?v=kMAOey45mJI", t:'Paino music'},{m:"https://www.youtube.com/watch?v=M5QY2_8704o", t:'Coding music'},{m:"https://www.youtube.com/watch?v=a4fv-BtzNmY", t:'Electronic'},{m:"https://www.youtube.com/watch?v=eGwhAwWGcOI&t=19s", t:'Instrumental Rock'}]
    
    const poshornotchoice =[{s: "https://www.youtube.com/v/rX0F3kY3uxU&start=62&end=80" ,area: 'London (Cockney)', posh: false, t: 62},{s: "https://www.youtube.com/v/cKFjPSAiHd8&start=90&end=95", area: 'manchester', posh: false, t: 90},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=112&end=116', area: 'Ulster', posh: false, t: 112},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=148&end=156', area: 'west country', posh: false, t: 148},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=219&end=225', area: 'Liverpool', posh: false, t:219},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=271&end=273',area:'Glasgow', posh: false, t:271},{s:'https://www.youtube.com/v/cKFjPSAiHd8&start=277&end=281', area: 'Berkshire', posh: true, t:277},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=352&end=356',area: 'Birmingham', posh: false, t:352},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=358&end=364',area: 'Welsh', posh: false, t:358},{s: 'https://www.youtube.com/v/cKFjPSAiHd8&start=409&end=412',area: 'Newcastle', posh: false, t:409}]


    return (
        <StateContext.Provider
          value={{customElements, words, menuitem, setMenuItem, choice, setChoice, playmusic, setPlayMusic, musicchoice, volsp, setVolsp, poshornotchoice

        }}
        >
          {children}
        </StateContext.Provider>
      );
    }