import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  

    const customElements=[{q:"A four leged friend", a: "dog", raone:'chimp', ratwo:'parot', ratthree:'sheep', rafour:'hedge hog'}, {q:"moody house pet", a:"cat", raone:'chimp', ratwo:'parot', ratthree:'sheep', rafour:'hedge hog'}, {q:"lives in the sea", a:"fish", raone:'chimp', ratwo:'parot', ratthree:'sheep', rafour:'hedge hog'}, {q:"worm like", a:"snake", raone:'chimp', ratwo:'parot', ratthree:'sheep', rafour:'hedge hog'}]
    
    const words=['fish', 'chips', 'dogs', 'cats', 'raining', 'fishing', 'sausages', 'dictator']


    return (
        <StateContext.Provider
          value={{customElements, words

        }}
        >
          {children}
        </StateContext.Provider>
      );
    }