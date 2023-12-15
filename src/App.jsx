import React from "react";
import PropTypes from "prop-types";
import Calculator from "./Calculator";

class App extends React.Component{
    render(){
        const {
            style
        } = this.props;

        return (
            <>
                <div style={style}>
                    <Calculator />
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