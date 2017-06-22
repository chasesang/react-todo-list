var React = require ('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos:['washup', 'eat', 'gym','eat'],
      age:30
    }
  },

  render: function(){

    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return(
        
      )
    });


    var ager = setTimeout(function(){
      this.setState({
        age: 35
      });
    }.bind(this),5000);

    return(
      <div id="todo-list">
      <p> The busiest people have the most leisure... </p>
      <p> {this.state.age} </p>
      <ul>
        {todos}
      </ul>
      </div>
    );
  } // render
});

var myCheese = {name: 'Camemebert', smellFactor: 'Extreme pong', price: '3.50'};


// Put component into html page
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese ={myCheese} />, document.getElementById("todo-wrapper"));
