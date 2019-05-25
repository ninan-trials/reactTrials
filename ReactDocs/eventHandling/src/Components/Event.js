import React from 'react'

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state.isToggleOn);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Event Toggle</button>
                <br/><br/>
                <div className="stateOfToggle"> {this.state.isToggleOn ? 'ON' : 'OFF'} </div>
            </div>
        );
    }
}

export default Event;