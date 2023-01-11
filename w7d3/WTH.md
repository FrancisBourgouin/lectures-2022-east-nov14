# What the helicopter?

- Props
- CSS classes w/ React
- State
- Short circuit (&&)

JSX => JavaScript XML
HTML => Hypertext Markup Language

```jsx
  <h1>Hello!</h1>

  {ReactDOM.createElement("h1", {text:"Hello"})}

  <h1 className="" style={{fontSize:5}}>


  <Button>Hello!</Button>

  {Button({children:"Hello"})}

  const Button = (props) => {
    // ...
  }
```

```jsx
  $("body").append("<h1>kakakakak</h1>")

  const $h1 = $("<h1>")
  $h1.text("kakakakakka")

  $("body").append($h1)


  const addNumbersTogether = (num1, num2, num3) => {
    ...
  }

  $.ajax({
    url:"",
    method:"",
    data:"",
    onSuccess:""
  })
  $.post()


```

```jsx
  <h1>Hello <%= name %>, it is currently <%= time %></h1>


  app.get("/", (req, res) => {
    res.render("template", {name:"bob", time:new Date.toUTCString()})
  })
```
