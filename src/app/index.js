var React = require('react');
var ReactDOM = require('react-dom');


//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

//CSS requires
require('./css/index.css');


//SETUP ROUTING
// var App = React.createClass({
//     render: function(){
//         return(
//             <Router history={browserHistory}>
//                 <Route path={"/"} component={TodoComponent}></Route>
//                 <Route path={"/about"} component={About}></Route>
//             </Router>
//         );
//     }
// });

//Create a component
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'spin class', 'react', 'gym', 'react', 'sleep']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">

                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }, //render

    //Custom functions
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },

    // lifecycle functions
    componentWillMount: function(){
      console.log('componentWillMount');
    },

    componentDidMount: function(){
      console.log('componentDidMount');
      // any grabbing of external data
    },

    componentWillUpdate: function(){
      console.log('componentWillUpdate');
    },


});


ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
