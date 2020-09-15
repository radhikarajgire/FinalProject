import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  const [menuitem, setMenuItem] = useState();
  

    const customElements=[{q:"A four leged friend", a: "dog", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"A moody house pet", a:"cat", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"Lives in the sea", a:"fish", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}, {q:"Worm like", a:"snake", waone:'chimp', watwo:'parot', wathree:'sheep', wafour:'hedge hog'}]
    
    const words=['fish', 'chips', 'dogs', 'cats', 'raining', 'fishing', 'sausages', 'dictator']


    return (
        <StateContext.Provider
          value={{customElements, words, menuitem, setMenuItem

        }}
        >
          {children}
        </StateContext.Provider>
      );
    }