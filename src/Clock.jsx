import React from "react";
import PorpTypes from "prop-types";
import Button from "./Button";


class Clock extends React.Component{
    constructor(props){
        super(props);

        let {
            locale
        } = props;
        
        this.state = {
            date : new Date(),
            locale
        }
    }

    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.tick();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    tick(){
        this.setState((/**state,props */)=>{
            return {
                date : new Date()
            }
        });
    }

    changeLocale(){
        let {
            locale
        } = this.state;

        this.setState({
            locale : locale === "en-US" ? "bn-BD" : "en-US"
        })
    }

    render(){
        let {
            children,
            style
        } = this.props;

        let {
            date,
            locale
        } = this.state;

        return (<div style={style}>
            <h2>{"<-- Time -->"}</h2>
            <h1>{date.toLocaleString(locale)}</h1>
            {children}

            <Button changeHandler={this.changeLocale.bind(this)}>{locale}</Button>
        </div>)
    }
}

Clock.defaultProps = {
    locale : "en-US",
    children : <p>This is Message!!</p>,
    style : {
        fontSize : "20px",
        fontFamily : "'Fira Code',Arial",
        padding : "20px",
        backgroundColor : "#101010",
        color : "#00ff88",
        textAlign : "center"
    }
}

Clock.propTypes = {
    children : PorpTypes.any,
    locale : PorpTypes.string,
    style : PorpTypes.object
}

export default Clock;