import React from 'react'

function ChatStatus(props) {

    const onlineList = props.online;
    const onlineListItems = onlineList.map((item) =>
        <li>
            {item}
        </li>
    );

    const offlineList = props.offline;
    const offlineListItems = offlineList.map((item) =>
        <li>
            {item}
        </li>
    );
    return (
        <div className="Chat-status">
            <div className="online">
                <h3>Online: </h3>
                {onlineListItems}
            </div>
            <div className="offline">
                <h3>Offline: </h3>
                {offlineListItems}
            </div>
        </div>
    );
}

export default ChatStatus;