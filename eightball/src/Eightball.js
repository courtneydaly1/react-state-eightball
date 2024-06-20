import React, {useState} from "react";

import "./Eightball.css";
import defaultAnswers from "/.defaultAnswers.json";
import {choice} from "./random";

function Eightball({ answers = defaultAnswers}) {
    const [answer, setAnswer] = useState({
        message: "Ask a Question.",
        color: "black",
    });
    function handleClick(e) {
        setAnswer(choice(answers));
    }

    return (
        <div
            className = "Eightball"
            onClick = {handleClick}
            style = {{ backgroundColor: answer.color}}
        >
        <b>{answer.message}</b>
        </div>
    );
}

export default Eightball;