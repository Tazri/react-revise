import React from "react";
import PropTypes from "prop-types";
import AddEmoji from "./AddEmoji";
import Text from "./Text";
import AddBracket from "./AddBracket";

class App extends React.Component{
    render(){
        const {
            style
        } = this.props;
        
        return (
            <>
                <div style={style}>
                   <AddEmoji>
                        {({addEmoji})=>{
                            return (<AddBracket>
                                {({addBracket})=>{
                                    return (
                                        <Text addEmoji={addEmoji} addBracket={addBracket}>
                                            Hell my life...
                                        </Text>
                                    )
                                }}
                            </AddBracket>)
                        }}
                   </AddEmoji>
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