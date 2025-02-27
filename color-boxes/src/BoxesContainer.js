import React, {useState} from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import {choice, randInt} from "./random";


const defaultColors = [
    "Aqua", "Black", "BlanchedAlmond", "Blue", "Chocolate", "DodgerBlue",
    "Lavender", "LawnGreen", "Peru", "Plum", "SpringGreen", "SteelBlue", "Tan",
    "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Yellow", "YellowGreen",
];

function BoxesContainer ({ allColors = defaultColors, numBoxes =16}){
    const [boxes, setBoxes] = useState(getInitialRandomColors);
  
    /** Return array of random colors. */
    function getInitialRandomColors(){
        return Array.from(
            { length: numBoxes},
            () => choice(allColors)
        );
    }
}
  /** On button click: pick random box, change to random color. */

  function handleClick(e){
    setBoxes(boxes => {
        let idx = randInt(numBoxes);
        let boxCopy = [...boxes];
        boxCopy[idx] = choice(allColors);
        return boxCopy;
    });


    const boxComponents = boxes.map((color,idx) => 
        <Box key={idx} color= {color} />);
        return(
            <div>
                <section className = "BoxesContainer">{boxComponents}</section>
                <button onClick={handleClick}>Change a Box</button>
            </div>
        );

  }