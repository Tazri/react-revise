import React from "react";
import PropTypes from "prop-types";
import TemperatureInput from "./TemperatureInput";
import Convert from "./libs/convertion.js"
import BoilingVertict from "./BoilingVertict";

const {
    tryConvert,
    toCelcius,
    toFahrenheit
} = Convert;

class Calculator extends React.Component{
    state = {
        temperature : "",
        scale : 'c'
    }

    handleCelsiusChange = (temperature)=>{
        this.setState({
            scale : 'c',
            temperature
        })
    }

    handleFahrenheitChange = (temperature)=>{
        this.setState({
            scale : "f",
            temperature
        })
    }



    render(){
        const {
            scale,
            temperature
        } = this.state;

        const celcius = scale == "f" ?  tryConvert(temperature,toCelcius) : temperature;
        const fahrenheit = scale == "c" ? tryConvert(temperature,toFahrenheit) : temperature;

        const {
            style
        } = this.props;

        return (
            <div style={style}>
                <TemperatureInput 
                    scale="c" 
                    temperature={celcius}
                    onTemperatureChange={this.handleCelsiusChange}
                    />

                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVertict celsius={celcius} />
            </div>
        )
    }
}

Calculator.propTypes = {
    style : PropTypes.object
}

Calculator.defaultProps = {
    style : {
        display : "flex",
        flexDirection : "column",
        gap : "40px"
    }
}

export default Calculator;