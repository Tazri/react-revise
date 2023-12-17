import React from "react";
import PropTypes from "prop-types";
import ButtonCounter from "./ButtonCounter";
import HoverCounter from "./HoverCounter";
import Counter from "./Counter";

class App extends React.Component{
    render(){
        const {
            style
        } = this.props;
        
        return (
            <>
                <div style={style}>
                   <Counter>
                    {({increamentCount,count})=>{
                        return (
                            <ButtonCounter
                                increamentCount={increamentCount}
                                count={count}
                            />
                        )
                    }}
                   </Counter>

                   <Counter>
                    {({increamentCount,count})=>{
                        return (
                            <HoverCounter
                                increamentCount={increamentCount}
                                count={count}
                            />
                        )
                    }}
                   </Counter>
                </div>
            </>
        )
    }
}

App.propTypes = {
    style : PropTypes.object
}

App.defaultProps = {
    style : {
        display : "flex",
        flexDirection : "column",
        justifyItems : "center",
        alignItems : "center",
        backgroundColor : "#8800ff",
        color : "#f0f8ff",
        fontSize : "1.4em",
        fontFamily : "'Fira Code',arial",
        padding : "20px"
    }
}



export default App;