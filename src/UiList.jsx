import PropTypes from "prop-types";

function UiList({style,items}){
    return (
        <ul style={style}>
            {
                items.map((value)=>{
                    let style = {
                        backgroundColor : value & 1 ? "crimson" : "#0088ff",
                        color : "#f0f8ff"
                    }
                    return <li style={style} key={Math.random()}>{value}</li>;
                })
            }
        </ul>
    )

}

UiList.propTypes = {
    style : PropTypes.object,
    items : PropTypes.arrayOf(PropTypes.number).isRequired
}



export default UiList;