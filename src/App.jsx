import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

class App extends React.Component{
    render(){
        const {
            style
        } = this.props;

        return (
            <>
                <div style={style}>
                    <h1>Form handling</h1>

                    <Form />
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
        fontFamily : "'Fira Code',arial"
    }
}



export default App;