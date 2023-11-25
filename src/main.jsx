import React from "react";
import { createRoot } from "react-dom/client";


let element = React.createElement(
    "div",
    {
        style : {
            color : "#0088ff",
            fontSize : "30px"
        }
    },
    React.createElement("h1",null,"This is header!"),
    React.createElement("p",null,"This is text.")
    );

console.log(element);

createRoot(document.getElementById("root")).render(element);

// deprecated
// ReactDOM.render(document.getElementById("root"),element);