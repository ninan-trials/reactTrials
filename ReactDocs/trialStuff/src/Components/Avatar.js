import React from 'react'

function Avatar(props){
    return(
        <div className="UserInfo">
            <img
                src={props.imgUrl}
                alt={props.name}
            />
            <div className="UserInfo-name">
                {props.name}
            </div>
        </div>
    );
}

export default Avatar;