import React from "react";
import PropTypes from "prop-types";
import UiList from "./UiList";

class App extends React.Component{
    render(){
        const {
            style
        } = this.props;

        let items = [1,2,3,4,5,6,7];

        return (
            <>
                <div style={style}>
                    <UiList items={items} />
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
        color : "#0088ff",
        fontFamily : "'Fira Code',arial",
        fontSize : "1.5em",
        textAlign : "center"
    }
}


export default App;