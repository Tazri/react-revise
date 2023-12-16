import React from "react";
import PropTypes from "prop-types";

class AddEmoji extends React.Component{
    addEmoji = (text)=> `👽 ${text} 👽`;

    render(){
        const {
            children
        } = this.props;

        return children({
            addEmoji : this.addEmoji
        });

    }
}


AddEmoji.propTypes = {
    children : PropTypes.func
}

export default AddEmoji;