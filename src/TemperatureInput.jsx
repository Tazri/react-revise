import React from "react";
import PropTypes from "prop-types";

const scaleName = {
    c : "celcius",
    f : "Fahrenheit"
}


class TemperatureInput extends React.Component{
    handleChange = (e)=>{
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const {
            temperature,
            scale,
            style
        } = this.props;

        return(
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]} : </legend>
                
                <input style={style} type="number" value={temperature} onChange={this.handleChange} step={20} />
            </fieldset>
        )
    }
}


TemperatureInput.propTypes = {
    scale : PropTypes.string,
    temperature :PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    onTemperatureChange : PropTypes.func,
    style : PropTypes.object
}

TemperatureInput.defaultProps = {
    scale : "c",
    style : {
        fontSize : "20px",
        padding : "10px 20px",
        width : "80%",
        display : "inline-block",
        margin : "20px auto"
    }
}


export default TemperatureInput;