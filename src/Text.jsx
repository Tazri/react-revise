import PropTypes from "prop-types";

function Text({addEmoji,addBracket, children}){
    let text = children;
    if(addEmoji){
        text = addEmoji(text);
    }

    if(addBracket){
        text = addBracket(text);
    }
    return <p>{text}</p>
}


Text.propTypes = {
    addEmoji : PropTypes.func,
    addBracket : PropTypes.func,
    children : PropTypes.string
}

Text.defaultProps = {
    children : "This is simple text."
}

export default Text;