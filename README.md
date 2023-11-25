# React Component and Props

## React Component

> 🟢 **React Component** is a function which is return a react element or class which is extends `React.Component` class and has `render` method which is return a react element.

**Here is the simple function component :**
```jsx
function Component(){
    return (<>
        <h1>Return JSX element</h1>
    </>);
}
```

**Here is the simple class component :**

Rule of declare class component : 
- The class must be extends `React.Component` class.
- The class must be has `render` method.
- The `render` method always return a JSX or React Element.

```js
import React from "react";

class Component extends React.Component{
    render(){
        return (<>
            <h1>Return JSX element</h1>
        </>)
    }
}
```

## Using Component
**Application of function component :**

There is a two way to use function component :
1. Call it directy with paramter.
2. Used it using JSX.

```js
// using funciton component
FunctionComponent(props /** is object */);


// use function component by JSX
<FunctionComponent /> // it means FunctionComponent()

// call function component with childer using JSX
<FunctionComponent>
    <h1>Children</h1> 
    // children will available in props.children as array
</FunctionComponent> 
```

**Application of class component :**

There is a two way to use class component :
1. Create object. Which is react component.
2. Create object using JSX.

```jsx
let element = new ClassComponent(props /** is object */);

// use jsx
<ClassComponent /> // same things

// use class component with children
<ClassComponent>
    <h1>Children</h1>
    // children will avaiable in this.props.children as array or single element.
</ClassComponent>
```

## Props

> 🟢 **Props** is one kind of read-only object. Which used to pass data from one component to another.

**Sending Props :**
```jsx
// sending props in function and class component are same
<FunctionComponent propsProperty = Value />
<ClassComponent propsProperty = Value />
```

**Receiving Props in Functional Component :**
```js
function FunctionalComponent(props){
    let {
        propsProperty 
    } = props;

    return jsxElement;
}
```

**Receiving Props in Class Component :**
```js
class ClassComponent extends React.Component{
    render(){
        let {
            propsProperty
        } = this.props;
        
        return jsxElement;
    }
}
```

**If props used in state then receive it inside constructor :**
```jsx
class ClassComponent extends React.Component{
    constructor(props){
        super(props);

        // here do anything with props for state
    }

    render(){
        return jsxElement;
    }
}
```

<hr />