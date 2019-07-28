import React from 'react';
import Typography from "@material-ui/core/Typography";

function PersonalInfo(props) {
    return (
        <div >
            <Typography variant="h5" component="h4">
                <p>{props.data.name}</p>
            </Typography>
            <Typography component="p" variant="subtitle2">
                <p><a href={props.data.gitLink} target="_blank">GitHub</a></p>
            </Typography>
            <Typography component="p" variant="subtitle2">
                <p><a href={props.data.mailLink} target="_blank">EMAIL: {props.data.mailLink}</a></p>
            </Typography>
        </div>
    )
}

export default PersonalInfo;
