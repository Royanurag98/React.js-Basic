import React, { createContext, useState, useEffect, useContext } from 'react';
import { ColorContext } from "./ColorContext";

function ColorContextProvider(props) {
  const [Color, setColor] = useState("white");
  const [CardColor, setCardColor] = useState("black");
  const [TextColor, setTextColor] = useState("black");

  const BgColorToggling = (action) => {
    console.log("SharedComponent")
    let prevColor = Color;
    let c = prevColor === "white" ? "black" : "white";
    sessionStorage.setItem("bgColor", c);
    setColor(c);

    let prev = CardColor;
    setTextColor(prev)
    let cc = prev === "black" ? "white" : "black";
    sessionStorage.setItem("ccColor", cc);
    setCardColor(cc);
  };

  useEffect(() => {
    let g = sessionStorage.getItem("bgColor");
    let c = sessionStorage.getItem("ccColor");
    if (g) setColor(g);
    if (c) setCardColor(c);
  }, [Color, CardColor]);

  const ShareBtnComponent = () => (
    <div>
      <button className="  bg-blue-700 text-white text-[15px] font-bold px-3 py-2 hover:bg-blue-400
       active:bg-blue-600 rounded-md  " onClick={BgColorToggling}> Light/Dark
      </button>
    </div>
  );

  return (
      <ColorContext.Provider  value={{ Color, CardColor, setColor, setCardColor, ShareBtnComponent, TextColor }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export default ColorContextProvider;
