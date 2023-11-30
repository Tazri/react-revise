# Forms

## Controlled Components

> 🟢 An input form element whose value is controlled by React in this way is called a **"controlled component"**.

> 🔴 In react way every form input element bind with **state** and it update when state is update by `useState` method. This process is called **single source of truth**.

**For exmaple :**
```jsx
handleSubmit = (event)=>{
    event.preventDefault();

    console.log("Form are submited");
}

handleChange = (event)=>{
    this.setState({value: event.target.value});
}

render(){
    return(
        <form>
            <input type="text"
               value={this.state.value}
               onChange={this.handleChange}
            />
        </form>
    )
}
```

## The textarea tag

> 🟢 In React, a `<textarea>` uses a value attribute instead of write something inside. Here is example : 

```jsx
<textarea value={this.state.value} onChange={this.handleChange} />
```

## Select Tag

> 🟢 In `<select>` tag, react use `value` attribute instead of use `selected` attribute.

```jsx
<select value={this.state.value} onChange={this.handleChange}>
    <option value="ReactJS">ReactJS</option>
    <option value="AngularJs">AngularJS</option>
    <option value="VueJS">VueJS</option>
    <option value="NextJS">NextJS</option>
</select>
```

## The file input tag

> 🟢 File input tag is uncontrolled component in React because it's value is read-only and manipulated by JavaScript via the `File API`.

## Controlled Input null value

> 🟢 If set `value` attribute to `null` or `undefined` value then it will becomes editable.

<hr />
