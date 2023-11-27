# Handling Event

> 🟢 Handling events in react is similar with handling event in DOM. There two rules for it : 

- React events are named using camelCase, rather than lowercase.
- Pass function as event handler rather than pass string.

**Example :**
```jsx
// in html
<button onclick="doSomething()">
    Click It.
</button>

// in jsx
<button onClick={doSomething}>
    Click It.
</button>
```

## Prevent From Submit Default Behaviour
```jsx
function Form(){
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}
```

> 🟢 When using React, generally don't need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

```jsx
class Toggle extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isToggleOn : true
        };

        // bind the handler with object
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState = >({
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render(){
        return(){
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
        }
    }
}
```

**If bind is confuse thing then use arrow funciton instead :**

```js
class ClassComponent extends React.Component{
    handleEvent = ()=>{
        console.log("This is : ",this);
    }
}
```

**Another way is call function using arrow funciton :**
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

## shouldComponentUpdate Lifecycle Method

**`shouldComponentUpdate` method used for decide to component going to render or not :**

```js
shouldComponentUpdate(nextProps){
    return boolean;
    // true if need to update
    // false if don't need to update
}
```

<hr />

