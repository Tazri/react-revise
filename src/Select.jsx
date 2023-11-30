import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component{
    render(){
        const {
            label,
            name,
            id,
            style,
            options,
            selected,
            selectStyle,
            change
        } = this.props;

        const selectedAttribute = {
            name,id
        }

        return(
        <div className="select" style={style}>
            <label htmlFor={id}>{label}</label>
            <select 
                {...selectedAttribute} 
                value={selected}
                style={selectStyle}
                onChange={change}
                >
                {
                    options.map(value=>{
                        return <option key={Math.random()} value={value}>{value}</option>
                    })
                }
            </select>
        </div>)
    }
}

Select.propTypes = {
    options : PropTypes.arrayOf(PropTypes.string).isRequired,
    label : PropTypes.string.isRequired,
    name :PropTypes.string.isRequired,
    id : PropTypes.string,
    selected : PropTypes.string.isRequired,
    change : PropTypes.func.isRequired,


    style : PropTypes.object,
    selectStyle : PropTypes.object
}

Select.defaultProps = {
    style : {
        fontSize : "0.9em",
        display : "flex",
        flex : "row wrap",
        gap : "10px",
        margin : "20px auto"
    },

    selectStyle : {
        padding : "10px 14px",
        cursor : "pointer"
    }
}

export default Select;