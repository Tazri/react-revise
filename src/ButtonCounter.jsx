import PropTypes from "prop-types";


// eslint-disable-next-line react-refresh/only-export-components
function ButtonCounter(props){
    const {
        increamentCount,
        count,
        style
    } = props;

    return (
        <button onClick={increamentCount} style={style}>{count} Times clicked.</button>
    )
}

ButtonCounter.propTypes = {
    increamentCount : PropTypes.func,
    count : PropTypes.number,
    style : PropTypes.object
}

ButtonCounter.defaultProps = {
    style : {
        padding : "10px 20px",
        border : "3px solid #0088ff",
        backgroundColor : "#0088ff",
        cursor : "pointer"
    }
}



// eslint-disable-next-line react-refresh/only-export-components
export default ButtonCounter;