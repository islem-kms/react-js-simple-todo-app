var React = require('react');
//var Link = require('react-router').Link;

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

var About = React.createClass({
    render: function(){
        return(
            <div>
                <h2>All about me</h2>
            </div>
        );
    }
});

// function About() {

// 	return (
// 		<div>
			
// 			<h2>
// 				All about me.
// 			</h2>
// 		</div>
// 		);

// }

module.exports = About;
