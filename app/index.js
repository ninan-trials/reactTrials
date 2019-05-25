var React= require('react');
var ReactDOM= require('react-dom');

var FriendsContainer= React.createClass({
	render: function(){
		var name="Ninan John J P"
		var friends=["Leo","Orion","LeoOrion"]

		return(
			<div>
				<h3> Name: {name} </h3>
				<ShowList list={friends} />
			</div>
		)
	}
})

var ShowList=React.createClass({
	render: function(){
		var listItems= this.props.list.map(function(friend){
			return <li>{friend}</li>;
		});

		return (
			<div>
				<h3>Friends</h3>
				<ul>{listItems}</ul>
			</div>
		)
	}
})

ReactDOM.render(
	<FriendsContainer/>,
	document.getElementById("app")
)
