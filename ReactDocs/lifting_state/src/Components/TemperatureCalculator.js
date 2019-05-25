import React from 'react'
import TempInput from './TempInput'
import BoilingPoint from './BoilingPoint'

class TemperatureCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scale: '',
            temperature: ''
        };

        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelciusChange(newTemp) {
        this.setState({
            scale: 'c',
            temperature: newTemp
        });
    }

    handleFahrenheitChange(newTemp) {
        this.setState({
            scale: 'f',
            temperature: newTemp
        });
    }

    convert(temperature, convertFunction) {
        const input = parseFloat(temperature);
        if (isNaN(input)) {
            return '';
        }
        const output = convertFunction(temperature);

        return (Math.round(output * 1000) / 1000).toString();
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    render() {
        const temperature = this.state.temperature;
        const celsius = this.state.scale === 'c' ? temperature : this.convert(temperature, this.toCelsius);
        const fahrenheit = this.state.scale === 'f' ? temperature : this.convert(temperature, this.toFahrenheit);
        return (
            <div>
                <TempInput scale="c" temperature={celsius} onTempChange={this.handleCelciusChange}/>
                <TempInput scale="f" temperature={fahrenheit} onTempChange={this.handleFahrenheitChange}/>
                <BoilingPoint celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}

export default TemperatureCalculator;