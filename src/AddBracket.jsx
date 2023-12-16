import React from "react";
import PropTypes from "prop-types";

class AddBracket extends React.Component{
    addBracket = (text)=> `[ ${text} ]`

    render(){
        const {
            children
        } = this.props;
        return children({
            addBracket : this.addBracket
        })
    }
}

AddBracket.propTypes = {
    children : PropTypes.func
}

export default AddBracket;