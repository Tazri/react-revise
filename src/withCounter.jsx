import React from "react";

function withCounter(OriginalComponent){
    class WithCounterComponent extends React.Component{
        state = {
            count : 0
        }

        increamentCount = ()=>{
            this.setState(({count:prevCount})=>{
                return {
                    count : prevCount + 1
                }
            })
        }

        render(){
            const {
                count
            } = this.state;

            return (
                <OriginalComponent count={count} increamentCount={this.increamentCount} />
            )
        }

    }

    return WithCounterComponent;
}

export default withCounter;