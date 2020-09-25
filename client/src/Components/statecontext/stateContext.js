import React, { createContext, useState, useEffect } from "react";

export const StateContext = createContext({});

export default function StateContextProvider({ children }) {
  const [menuitem, setMenuItem] = useState();
  const [choice, setChoice] = useState("");
  const [playmusic, setPlayMusic] = useState(true);
  const [volsp, setVolsp] = useState(100);

  const customElements = [
    {
      q: "A four leged friend",
      a: "dog",
      waone: "chimp",
      watwo: "parot",
      wathree: "sheep",
      wafour: "hedge hog",
    },
    {
      q: "A moody house pet",
      a: "cat",
      waone: "chimp",
      watwo: "parot",
      wathree: "sheep",
      wafour: "hedge hog",
    },
    {
      q: "Lives in the sea",
      a: "fish",
      waone: "chimp",
      watwo: "parot",
      wathree: "sheep",
      wafour: "hedge hog",
    },
    {
      q: "Worm like",
      a: "snake",
      waone: "chimp",
      watwo: "parot",
      wathree: "sheep",
      wafour: "hedge hog",
    },
  ];

  const words = [
    "fish",
    "chips",
    "dogs",
    "cats",
    "raining",
    "fishing",
    "sausages",
    "dictator",
  ];

  const musicchoice = [
    {
      m: "https://www.youtube.com/watch?v=cIXCnZ_jg30&t=23s",
      t: "Study with me, music",
    },
    {
      m: "https://www.youtube.com/watch?reload=9&v=1Cv0kCB59J4",
      t: "Study with me, quiet",
    },
    { m: "https://www.youtube.com/watch?v=sUuNcYxocIQ", t: "Study-bootcamp" },
    { m: "https://www.youtube.com/watch?v=sjkrrmBnpGE", t: "Ambient music" },
    { m: "https://www.youtube.com/watch?v=kMAOey45mJI", t: "Paino music" },
    { m: "https://www.youtube.com/watch?v=M5QY2_8704o", t: "Coding music" },
    { m: "https://www.youtube.com/watch?v=a4fv-BtzNmY", t: "Electronic" },
    {
      m: "https://www.youtube.com/watch?v=eGwhAwWGcOI&t=19s",
      t: "Instrumental Rock",
    },
  ];

  const poshornotchoice = [
    {
      s: "https://www.youtube.com/v/rX0F3kY3uxU&start=62&end=80",
      area: "London (Cockney)",
      posh: false,
      t: 62,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=90&end=95",
      area: "manchester",
      posh: false,
      t: 90,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=112&end=116",
      area: "Ulster",
      posh: false,
      t: 112,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=148&end=156",
      area: "west country",
      posh: false,
      t: 148,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=219&end=225",
      area: "Liverpool",
      posh: false,
      t: 219,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=271&end=273",
      area: "Glasgow",
      posh: false,
      t: 271,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=277&end=281",
      area: "Berkshire",
      posh: true,
      t: 277,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=352&end=356",
      area: "Birmingham",
      posh: false,
      t: 352,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=358&end=364",
      area: "Welsh",
      posh: false,
      t: 358,
    },
    {
      s: "https://www.youtube.com/v/cKFjPSAiHd8&start=409&end=412",
      area: "Newcastle",
      posh: false,
      t: 409,
    },
  ];

  const listeningpractice = [
    {
      s: "https://www.youtube.com/watch?v=svuPbOHWF-M",
      t: 0,
      descrip: "Only fools and horses",
    },
    {
      s: "https://www.youtube.com/watch?v=rvYuoWyk8iU",
      t: 0,
      descrip: "Yes Minister",
    },
    {
      s: "https://www.youtube.com/watch?v=ueWXZaoHwsU",
      t: 0,
      descrip: "Black Adder",
    },
    {
      s: "https://www.youtube.com/watch?v=ayzvXhTRbII",
      t: 0,
      descrip: "Fry and Laurie",
    },
    {
      s: "https://www.youtube.com/watch?v=LfduUFF_i1A",
      t: 0,
      descrip: "Monthy Python",
    },
    {
      s: "https://www.youtube.com/watch?v=TLwc9lbJlIQ",
      t: 0,
      descrip: "The Young Ones",
    },
  ];

  const [days, setDays] = useState([
    [
      { datecal: "September 28, 2020" },
      {
        id: 1,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 2,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 3,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 4,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: false,
        idofselector: 0,
      },
    ],
    [
      { datecal: "September 29, 2020" },
      {
        id: 5,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 6,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 7,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 8,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: false,
        idofselector: 0,
      },
    ],

    [
      { datecal: "September 30, 2020" },
      {
        id: 9,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 10,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 11,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 12,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 3,
      },
    ],

    [
      { datecal: "October 1, 2020" },
      {
        id: 13,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 14,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 15,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 2,
      },
      {
        id: 16,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 2,
      },
    ],

    [
      { datecal: "October 2, 2020" },
      {
        id: 17,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 18,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 19,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 2,
      },
      {
        id: 20,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 2,
      },
    ],

    [
      { datecal: "October 5, 2020" },
      {
        id: 21,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 22,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 23,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 24,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: false,
        idofselector: 0,
      },
    ],
    [
      { datecal: "October 6, 2020" },
      {
        id: 25,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 26,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 27,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 28,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: false,
        idofselector: 0,
      },
    ],

    [
      { datecal: "October 7, 2020" },
      {
        id: 29,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 30,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: false,
        idofselector: 0,
      },
      {
        id: 31,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 32,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 1,
      },
    ],

    [
      { datecal: "October 8, 2020" },
      {
        id: 33,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 34,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 3,
      },
      {
        id: 35,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 2,
      },
      {
        id: 36,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 2,
      },
    ],

    [
      { datecal: "October 9, 2020" },
      {
        id: 37,
        starttime: "14:00",
        endtime: "15:30",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 38,
        starttime: "15:45",
        endtime: "17:15",
        isSelected: true,
        idofselector: 1,
      },
      {
        id: 39,
        starttime: "17:30",
        endtime: "19:00",
        isSelected: true,
        idofselector: 2,
      },
      {
        id: 40,
        starttime: "19:15",
        endtime: "20:45",
        isSelected: true,
        idofselector: 2,
      },
    ],
  ]);

  const exgameslist = [
    {
      game: "https://www.gamestolearnenglish.com/fast-vocab/embed.html",
      info: "Fast Vocab",
    },
    {
      game: "https://www.gamestolearnenglish.com/hangman/embed.html",
      info: "Hangman",
    },
    {
      game: "https://www.gamestolearnenglish.com/fast-english/embed.html",
      info: "Fast English",
    },
    {
      game: "https://www.gamestolearnenglish.com/spelling-bee/embed.html",
      info: "Spelling Bee",
    },
  ];

  /* useEffect(()=>{
    fetch('https://www.oxfordlearnersdictionaries.com/api/v1/wordoftheday', {mode: 'no-cors', method: 'GET'})
    .then(response=>response.json())
    .then(data=>console.log(data))



  },[])*/

  return (
    <StateContext.Provider
      value={{
        customElements,
        words,
        menuitem,
        setMenuItem,
        choice,
        setChoice,
        playmusic,
        setPlayMusic,
        musicchoice,
        volsp,
        setVolsp,
        poshornotchoice,
        listeningpractice,
        days,
        setDays,
        exgameslist,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
