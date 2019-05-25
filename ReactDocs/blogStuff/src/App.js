import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog'

const posts =
    [
        {id: 1, content: "Ninan", title: "leoOrion"},
        {id: 2, content: "Simon", title: "Timon"}
    ];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Blog posts={posts} />
                </p>
            </div>
        );
    }
}

export default App;
