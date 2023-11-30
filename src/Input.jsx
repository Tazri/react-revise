import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component{
    render(){
        const {
            value,
            type,
            name,
            label,
            placeholder,
            change,
            id,
            

            divStyle,
            inputStyle
        } = this.props;

        let inputStyleModified = {
            ...inputStyle
        }

        const inputAttribute = {
            type,
            name,
            placeholder,
            id
        }

        if(["text","password"].indexOf(type) != -1){
            Object.assign(inputStyleModified,{
                width : "70%",
                minWidth : "220px",
                maxWidth : "450px",
            })
        }


        return (
        <>
        <div className="input" style={divStyle}>
            {
                ["text","password"].indexOf(type) != -1  ?
                <>
                    <label htmlFor={id} >{label}</label>
                
                    <input {...inputAttribute} value={value} onChange={change} style={inputStyleModified} / >
                </> : 
                <>
                    <input {...inputAttribute} onChange={change} style={inputStyleModified} checked={value} / >
                    <label htmlFor={id} >{label}</label>
                </> 
            }
            
            
        </div>
        </>)
    }
}

Input.propTypes = {
    type : PropTypes.oneOf(["text","password","checkbox","submit"]),
    value : PropTypes.oneOfType([PropTypes.string,PropTypes.bool]).isRequired,
    label : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    name : PropTypes.string.isRequired,
    change : PropTypes.func.isRequired,
    id : PropTypes.string,

    /** style */
    divStyle : PropTypes.object,
    inputStyle : PropTypes.object
}

Input.defaultProps = {
    type : "text",

    divStyle : {
        display : "flex",
        fontSize : "0.9em",
        gap : "20px",
        alignItems : "center",
        margin : "20px auto"
    },
    inputStyle : {
        border : "2px solid #8800ff",
        padding : "8px 12px"
    }
}

export default Input;