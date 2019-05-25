import React from 'react';

function Sidebar(props) {
    return (
        <ul>
            {props.listOfPosts}
        </ul>
    );
}

export default Sidebar;