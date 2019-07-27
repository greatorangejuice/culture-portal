import React from 'react';

function Links(props) {
    return (
        <div >
            <p><a href={props.data.gitLink} target="_blank">GitHub</a></p>
            <p><a href={props.data.mailLink} target="_blank">EMAIL: {props.data.mailLink}</a></p>
        </div>
    )
}

export default Links;
