var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Link = ReactRouter.Link;

var Nav = require('./nav');

require('./css/index.css');

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');

var App = React.createClass({
	render: function() {
		return (
			<Router>
				<div className="container">
					<Nav />

					<Switch>
						
						<Route exact path='/' component={TodoComponent}/>
						<Route path='/about' component={About}/>
						<Route render = { function() {
							return <p>
								Not found
							</p>
							}	
						} />
					</Switch>
					
				</div>
			</Router>
		);
	}
});

// Create component
var TodoComponent = React.createClass({

	// Set the initial state of a component
	getInitialState: function(){

		return {

			todos: ['wake up', 'get a coffee', 'write some code', 'eat', 'play League of Legends', 'sleep']

		}

	},

	// Any last minute prep before component mounts
	//componentWillMount
	//
	// Called before a component recieves any new props
	// Can compare the current and new props and change state
	//componentWillRecieveProps: function(){
	//	//
	//}
	
	// Can return false if no update wanted
	//shouldComponentUpdate: function(){
	//	//
	//}
	
	//componentWillUpdate: function(){
	//	//
	//}

	//returns HTML to add to the DOM
	render: function() {

		var todos = this.state.todos;

		todos = todos.map(function(item, index) {
			return (
				<TodoItem item={item} key={index} onDelete={this.onDelete}/>
			);
		}.bind(this));

		return (
			<div id="todo-list">

				<p onClick={this.clicked}>What best coders do:</p>

				<ul>
					{ todos }
				</ul>
				<AddItem onAdd={this.onAdd}/>

			</div>
		);
	},	

	// Fires after component mounts to the DOM
	// Load external data
	// Operate on the DOM or perform network requests
	//componentDidUpdate: function(){
	//	//
	//}

	// Custom functions
	clicked: function(){
		console.log('you clicked');
	},

	onDelete: function(item){
		var updatedTodos = this.state.todos.filter(function(val, index) {
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
		});
	}
});

// Put component in HTML page
ReactDOM.render(<App/>, document.getElementById('todo-wrapper'));
