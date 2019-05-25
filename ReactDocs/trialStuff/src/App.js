import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './Components/CommentBox'

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        imgUrl: 'http://placekitten.com/g/64/64'
    }
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <CommentBox author={comment.author}
                             date={comment.date}
                             text={comment.text}
                    />
                </p>
            </div>
        );
    }
}

export default App;
