import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Select from "./Select";

class Form extends React.Component{
    state = {
        name : "",
        password : "",
        isagree : false,
        technology : "ReactJS"
    };

    onChange = (event)=>{
        if(event.target.type == "checkbox"){
            this.setState({
                [event.target.name] : !this.state[event.target.name]
            })
        }else{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    }

    onSubmit = (event)=>{
        event.preventDefault();
        

        console.log("> Value is : ");
        console.log(this.state);

        this.setState({
            name : "",
            password : "",
            isagree : false,
            technology : "ReactJS"
        });

    }

    render(){
        const {
            style,
            buttonStyle
        } = this.props;

        const {
            name,
            password,
            isagree,
            technology
        } = this.state;

        return(
            <form style={style} onSubmit={this.onSubmit}>
                <p>Form</p>

                <Input
                    name="name"
                    value={name}
                    placeholder="Ans. Anonymo"
                    label="Name : "
                    change={this.onChange}
                    id="name"
                />

                <Input
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    label="Password : "
                    change={this.onChange}
                    type="password"
                    id="password"
                />

                <Input 
                    name="isagree"
                    value={isagree}
                    label="are you agree with term and condition ?"
                    change={this.onChange}
                    type="checkbox"
                    id="isagree" />

               <Select 
                    label="Select Your technology"
                    name="technology"
                    id="technology"
                    selected={technology}

                    options={[
                        "ReactJS",
                        "AngularJS",
                        "SvelteJS",
                        "VueJS",
                        "NextJS"
                    ]}
                    change={this.onChange}
               />

              <input type="submit" value={"Submit"} style={buttonStyle} />
                
            </form>
        )
    }
}

Form.propTypes = {
    style : PropTypes.object,
    buttonStyle : PropTypes.object
}

Form.defaultProps = {
    style : {
        fontSize : "1em",
        backgroundColor : "#f0f8ff",
        color : "#8800ff",
        margin : "20px",
        padding : "20px",
        
        /** box size */
        minWidth : "500px",
        width : "80%",
        maxWidth : "800px",
        borderRadius : "20px"
        
    },
    buttonStyle : {
        padding : "10px 14px",
        backgroundColor : "#8800ff",
        border : "2px solid #8800ff",
        color : "#f0f8ff",
        cursor : "pointer"
    }
}

export default Form;

