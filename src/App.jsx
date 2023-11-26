import React from "react";
import Clock from "./components/Clock";

class App extends React.Component{
    render(){
        return (<>
            <Clock />
            <Clock locale="bn-BD" color="#0088ff" />
        </>)
    }
}

export default App;