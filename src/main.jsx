import { createRoot } from "react-dom/client";
// import Clock from "./components/Clock";
import ClassClock from "./components/ClassClock";



let Clock = (
    <ClassClock locale="bn-BD">
        This is message
    </ClassClock>
)

createRoot(document.getElementById("root")).render(Clock);

// deprecated
// ReactDOM.render(document.getElementById("root"),element);