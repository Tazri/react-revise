# Props Types

> 🟢 It's practice to define props type inside the component. For this, first we need a npm package called **prop-types**.

**Example to define prop type in function component :**
```js
import PropTypes from "prop-types";

functionComponent.propTypes = {
    propName : PropTypes.type
}
```

**Example to define prop type in class component :**
```js
import PropTypes from "prop-types";

ClassComponent.propTypes = {
    propName : PropTypes.type
}
```

**Here is an example documenting the different validators provided :**
```jsx
Comptonent.propTypes = {
    // JS type
    optionalArray : PropTypes.array,
    optionalBool : PropTypes.bool,
    optionalFunc : PropTypes.func,
    optionalNumber : PropTypes.number,
    optionalObject : PropTypes.object,
    optionalString : PropTypes.string,
    optionalSymbol : PropTypes.symbol,

    // anything that can rendered numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode : PropTypes.node,

    // react element
    optionalElement : PropTypes.element,

    // A react element type or a component
    optionalElementType : PropTypes.elementType,

    // instance of class or not
    optionalClass : PropTypes.instanceOf(ClassName),

    // enum type to limited prop values.
    optionalEnum : propTypes.oneOf(["valueOne","valueTwo"]),

    // an object that could be one of many type
    optionalUnion : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Message)
    ]),

    // array of certain type
    optionalArrayOf : PropTypes.arrayOf(PropTypes.number),

    // an object of certain value
    optionalObjectOf : PropTypes.objectOf(PropTypes.number),

    // an object taking on a particular shape
    optionalObjectWithShape : PropTypes.shape({
        property : PropTypes.string,
        propertyOne : PropTypes.number
    }),

    // an object with warnings on extra properties
    optionalObjectWithStrictShape : PropTypes.exact({
        property : PropTypes.string,
        propertyOne : PropTypes.number
    }),

    // required the prop types
    requiredProps : PropTypes.func.isRequried,

    // custom prop type using function
    custromProp : function(props,propName,componentName){
        // if props is not ok then return new Error.
    },

    // custom array prop
    customArrayProp : PropTypes.arrayOf(function(propValue,key,componentName,location,propFullName){
        // if prop is not ok then return new Error.
    })
}
```

**Default Props Value :**
```js
Component.defaultProps = {
    propName : "value"
}

// after ES2022 it possible to declared prop default value inside the class using static property

class ClassComponent extends React.Component{
    static defaultProps = {
        propName : "value"
    }
}
```

<hr />