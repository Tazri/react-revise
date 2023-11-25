import React from "react";
import { createRoot } from "react-dom/client";


let element = React.createElement("h1",null,"Hello, World!");

createRoot(document.getElementById("root")).render(element);