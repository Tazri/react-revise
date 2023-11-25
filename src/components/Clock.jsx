import PropTypes from "prop-types";

function Clock({locale}){
    let style = {
        color : "#0088ff",
        fontSize : "30px"
    }
    return (<>
        <h1 style={style}>Time is : {new Date().toLocaleString(locale)}</h1>
    </>);
}

// define the props type
Clock.propTypes = {
    locale : PropTypes.string.isRequired
}

export default Clock;