# State and Lifecycle

## State

> 🟢 **State** is a object linked with class which contain some property. If change the state particular way then react update the component.

**Syntax of define state :**
```jsx
class ClassComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // here is state.
        }
    }

    // another way to define state
    state = {
        // here is state
    };
}
```

## Update State

> 🟢 Use `this.setState` method to update state. It take a object and merge with previous state and update the component accordingly.

```jsx
updateState(){
    this.setState({
        property : value
    });
}
```

> 🔴 Don't update state directly.

## Asynchronous State Update

> 🟢 `setState` also take a function for handling asyncrhonous state update.

```jsx
this.setState((state,props)=>{
    return {
        property : value;
    };

    // return object merged with state.
})
```

## Lifecycle Method

> 🟢 Custom function which is executed during the different phases of a component. There are 3 categories of lifecycle method available in react. **mounting**, **updating** and **unmounting**.

### componentDidMount Method

> 🟢 `componentDidMount` method called when the camponent is mounted.

```js
class ClassComponent extends React.Component{
    componentDidMount(){
        // what to do after mount the component.
    }
}
```

### componentWillUnmount

> 🟢 `componentWillUnmount` method called when the component is unmounted. It use for free resources what component taken.

```js
class ClassComponent extends React.Component{
    componentWillUnmount(){
        // what to do after unmount the component.
    }
}
```

<hr />