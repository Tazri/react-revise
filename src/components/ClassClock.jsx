import React from "react";
import PropTypes from "prop-types"

class ClassClock extends React.Component{
    render(){
        let style = {
            color : "#0088ff",
            fontSize : "30px"
        }

        let {
            locale,
            children
        } = this.props;

        return (<>
            <h1 style={style}>Time is : {new Date().toLocaleString(locale)}</h1>
            <p>Message : {children}</p>
        </>);
    }
}

// props type
ClassClock.propTypes = {
    locale : PropTypes.string.isRequired,
    children : PropTypes.any
}

export default ClassClock;