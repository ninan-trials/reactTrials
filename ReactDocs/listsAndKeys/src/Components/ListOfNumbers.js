import React from 'react'
import ListItem from './ListItem'

function ListOfNumbers(props) {
    return (
        <div>
            <ul>{props.numbers
                .map(
                    (number) =>
                        <ListItem key={number.toString()} value={number} />
                )
            }
            </ul>
        </div>
    );
}

export default ListOfNumbers;
