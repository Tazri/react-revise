import PropTypes from "prop-types";


function BoilingVertict(props){
    const {
        celsius,
        style
    } = props;

    if(celsius >= 100){
        return <p style={style}>The water would boil.</p>;
    }

    return <p style={style}>The water would not boil.</p>;
}


BoilingVertict.propTypes = {
    celsius : PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    style : PropTypes.object
}

BoilingVertict.defaultProps = {
    style : {
        fontSize : "30px",
        color : "#f0f8ff"
    }
}

export default BoilingVertict;