import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TempInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onTempChange(event.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> Enter Temp in {scaleNames[scale]}:</legend>
                <input onChange={this.handleChange} value={temperature}/>
            </fieldset>
        );
    }
}

export default TempInput;
