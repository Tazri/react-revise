# Lists and Keys

> 🟢 It is possible to render array of component using curly brucket.

```js
<ul>{listLiItems}</ul>
```


> 🔴 But in that case every item must be hold `key` attribute with unique value. Don't use array index as a key because it is not good practice instead use `Math.random()` good as well.

## Rendering Multiple Components With Keys

```js
const numbers = [1,2,3,4,5];

const listItems = numbers.map(number=>{
    <li key={Math.random()}>{number}</li>
})
```


<hr />