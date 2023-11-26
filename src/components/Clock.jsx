import PropTypes from "prop-types";
import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            date : new Date()
        }
    }

    // another way to define state
    // state = { date new Date() };

    // default prop value
    static defaultProps = {
        locale : "en-US",
        color : "#00ff88",
        background : "#101010"
    }

    // methods
    tick(){
        // update state
        this.setState({
            date : new Date()
        });
    }

    // life Cycle method
    componentDidMount(){
        this.intervalId = setInterval(()=>{
            this.tick()
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        let {
            date
        } = this.state;

        let {
            locale,
            color,
            background
        } = this.props;

        let style = {
            color,
            backgroundColor : background,
            textAlign : "center",
            padding : "20px",
            fontSize : "1em",
            fontFamily : "'Fira Code',arial",
            margin : "20px auto",
            cursor : "pointer"
        };

        return (
            <>
                <div style={style}>
                    <h2>{"<-- Time -->"}</h2>
                    <h1>{date.toLocaleString(locale)}</h1>
                </div>
            </>
        )
    }
}

Clock.propTypes = {
    locale : PropTypes.string.isRequired,
    color : PropTypes.string,
    background : PropTypes.string
}


export default Clock;