import React from 'react';
import './Avatar.css';
import Ava from '@material-ui/core/Avatar';

function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.data.avatar} alt={props.data.name} />
        </div>
    )
}

export default Avatar;
