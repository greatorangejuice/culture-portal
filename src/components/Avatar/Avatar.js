import React from 'react';
import './Avatar.css';

function Avatar(props) {
    console.log(props);
    return (
        <div className="avatar">
            <img src={props.data.avatar} alt={props.data.name} />
        </div>
    )
}

export default Avatar;
