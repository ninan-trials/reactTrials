import React from 'react'

function BoilingPoint(props) {
    if (props.celsius >= 100)
        return <p> Boiling Point reached </p>
    else {
        return <p>Get hotter!!</p>
    }
}

export default BoilingPoint;