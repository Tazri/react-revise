import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component{
    shouldComponentUpdate(nextProps){
        let{
            children : nextChildren
        } = nextProps;
        
        let{
            children : currentChildren
        } = this.props;

        if(nextChildren == currentChildren){
            return false;
        }
        return true;
    }

    render(){
        let {
            style,
            children,
            changeHandler
        } = this.props;

        return(
            <button style={style} onClick={()=>changeHandler()}>{children}</button>
        )
    }
}

Button.defaultProps = {
    style : {
        color : "#101010",
        cursor : "pointer",
        padding : "16px 24px",
        backgroundColor : "#00ff88",
        fontSize : "20px",
        border : "none"
    }
}

Button.propTypes = {
    children : PropTypes.string.isRequired,
    style : PropTypes.object,
    changeHandler : PropTypes.func.isRequired
}

export default Button;