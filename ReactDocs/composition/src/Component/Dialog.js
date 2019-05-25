import React from 'react'
import FancyBorder from './FancyBorder'
import SplitPane from './SplitPane'
import Contact from './Contact'
import ChatStatus from './ChatStatus'

function Dialog(props) {
    return (
        <div>
            <FancyBorder color="red">
                <h2>{props.title}</h2>
                <div>{props.message}</div>
                {props.children}
            </FancyBorder>

            <SplitPane left={<Contact list={['Ninan', 'Leo', 'Orion']}/>}
                       right={<ChatStatus online={['Leo']} offline={['Ninan', 'Orion']}/>}
            />
        </div>
    );
}

export default Dialog;


