# React JSX and Rendering Element

## How to create react element

> 🟢 `React.createElement()` function use for create react element. 

Here is the details of `React.createElement()` function :

```js
import React from "react";

React.createElement("ElementName",props,...childrens);

// it create object like this : 
{
    type : "ElementName",
    props : {
        /* rest of the property of props what passed */
        children : [...childrens]
    }
}
```

**Example of create simple react element :**
```js
import React from "react";

React.createElement("h1",null,"Hello,Worlds!");

// this object like : 
{
    type : "h1",
    props : {
        children : "Hello, Worlds!"
    }
}
```

**Another example of create simple react element :**
```js
let element = React.createElement(
    "div",
    {
        style : {
            color : "#0088ff",
            fontSize : "30px"
        }
    },
    React.createElement("h1",null,"This is header!"),
    React.createElement("p",null,"This is text.")
    );

// this object like : 
{
    type : "div",
    props : {
        style : {
            color : "#0088ff",
            fontSize : "30px" 
        },
        children : [
            {
                type : "h1",
                props : {
                    children : "This is header!"
                }
            },
            {
                type : "p",
                props : {
                    children : "This is text."
                }
            }
        ]
    }
}
```

<hr />

## JSX

> 🟢 **JSX** full form is JavaScript XML. JSX nothing but a syntactic sugar to write **JSX** element and React Component. It's like to write html code in JavaScript.

**Here is example :**
```js
<h1>Hello, Worlds!</h1>

// it convert behind the scene like this : 
React.createElement("h1",null,"Hello, Worlds!");

// must be write multiline jsx inside the first bracket
// otherwise it can be create a problem in future.
(<div style="color:#0088ff,fontSize : 30px">
    <h1>This is header!</h1>
    <p>This is text.</p>
</div>)

// it conver behind the scene like this : 
React.createElement(
    "div",
    {
        style : "color:#0088ff,fontSize : 30px"
    },
    React.createElement("h1",null,"This is header!"),
    React.createElement("p",null,"This is text.")
    );

```

## Interpolation

> 🟢 Use dynamic value inside the JSX called interpolation.

```js
<h1>Hello, {expression}</h1>

// another example
<h1>Hello, {getUserName()}</h1>
```

## Rendering JSX Element

**In the classic way which is now deprecated :**
```js
import ReactDom from "react-dom";

ReactDom.render(htmlElement,reactElement);
```

**Example :**
```jsx
import ReactDom from "react-dom";

ReactDom.render(document.getElementById("root"),APP);
```

**Current way to render JSX Element :**
```jsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(element);
```

<hr />
