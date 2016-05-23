// Component defined below
var HelloWorldVar = React.createClass({displayName: "HelloWorldVar",
  render: function () {
    return React.createElement("div", null, 
      React.createElement("h1", null, "Hello World"), 
      React.createElement("p", null, "This is jessie bitch!")
    )
  }
})
// Render Component
React.render( React.createElement(HelloWorldVar, null), document.body )
