# Conditional Rendering

## Render with Ternary operator

**Example to render JSX element based on state with ternary Operator :**

```jsx
render(){
    return(
        <div>
            { 
                this.state.on ? 
                    <h1>Switch is On</h1> :
                    <h1>Switch is off</h1>
            }
        </div>
    )
}
```

## Inline If With Logical && Operator

**Example to render using Logical && operator :**

```jsx
render(){
    return(
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 && 
                <h2>
                    You have {unreadMessage.length} unread message.
                </h2>
            }
        </div>
    )
}
```

## Preventing Component from Rendering

> 🟢 If need to prevent component to rendering then just return null.

**Example :**

```js
function WarningBanner({warning}){
    if(!warning) return null
    

    return (
        <div className="warnning">
            Warning!
        </div>
    )
}
```

<hr />

