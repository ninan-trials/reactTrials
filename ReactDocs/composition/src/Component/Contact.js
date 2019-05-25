import React from 'react'

function Contact(props) {
    const listOfContacts = props.list;
    const listItems = listOfContacts.map((item) =>
        <li>
            {item}
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default Contact;