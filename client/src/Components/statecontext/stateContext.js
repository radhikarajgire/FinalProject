import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  

    const customElements=[{q:"a four legged friend", a: "dog"}, {q:"moody house pet", a:"cat"}, {q:"lives in the sea", a:"fish"}, {q:"worm like", a:"snake"}]
    
    return (
        <StateContext.Provider
          value={{customElements

        }}
        >
          {children}
        </StateContext.Provider>
      );
    }