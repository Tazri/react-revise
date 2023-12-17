# Render Props

> 🟢 The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

**For example :**
```jsx
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
```

**Or pass a function as children which is one kind of props :**
```jsx
<DataProvider>
    {data=>(
        <h1>Hello {data.target}</h1>
    )}
</DataProvider>
```
<hr />
