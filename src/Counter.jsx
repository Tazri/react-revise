import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component{
    state = {
        count : 0
    }

    increamentCount = ()=>{
        this.setState(prevState=>{
            return {count : prevState.count + 1};
        });
    }

    render(){
        const {
            children
        } = this.props;

        const {
            count
        } = this.state;
        
        return children({
            count :count,
            increamentCount : this.increamentCount
        });
    }
}

Counter.propTypes = {
    children : PropTypes.any
}

export default Counter;