import React from 'react';
import Typography from '@material-ui/core/Typography';

function Summary(props) {
    return (
        <div>
            <Typography variant="h4" component="h4">
                {props.data.name}
            </Typography>
            <Typography component="p" variant="subtitle2">
                Род деятельности: <span>{props.data.occupation}</span>
            </Typography>
        </div>
    )
}

export default Summary;
