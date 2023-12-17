import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
function HoverCounter(props){
    const {
        count,
        increamentCount,
        style
    } = props;

    return (
        <p onMouseOver={increamentCount} style={style}>Hover {count} times..</p>
    )
}

HoverCounter.propTypes = {
    count : PropTypes.number,
    increamentCount : PropTypes.func,
    style : PropTypes.object
}

HoverCounter.defaultProps = {
    style : {
        fontSize : "20px",
        fontFamily : "arial",
        cursor : "pointer",
        border : "2px solid #0088ff",
        margin : "20px auto",
        padding : "10px 20px"
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default HoverCounter;