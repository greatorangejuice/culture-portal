import React from 'react';

function PersonalInfo(props) {
    return (
        <div >
            <p>{props.data.name}</p>
            <p><a href={props.data.gitLink} target="_blank">GitHub</a></p>
            <p><a href={props.data.mailLink} target="_blank">EMAIL: {props.data.mailLink}</a></p>
        </div>
    )
}

export default PersonalInfo;
