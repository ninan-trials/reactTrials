import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfNumbers from './Components/ListOfNumbers'

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <ListOfNumbers numbers={numbers}/>
                </p>
            </div>
        );
    }
}

export default App;
