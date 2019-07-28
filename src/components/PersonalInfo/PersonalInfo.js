import React from 'react';
import Typography from "@material-ui/core/Typography";

function PersonalInfo(props) {
    return (
        <div >
            <Typography variant="h5" component="h4">
                <p>{props.data.name}</p>
            </Typography>
            <Typography component="p" variant="subtitle2">
                <a href={props.data.gitLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </Typography>
            <Typography component="p" variant="subtitle2">
                <a href={props.data.mailLink} target="_blank" rel="noopener noreferrer">EMAIL: {props.data.mailLink}</a>
            </Typography>
        </div>
    )
}

export default PersonalInfo;
