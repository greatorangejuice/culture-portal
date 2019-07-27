import React from 'react';
import Typography from '@material-ui/core/Typography';

function Description(props) {
    const activity = props.data.activity.map((item) => {
        return (
            <div>
                <hr/>
                <p> {item.date} </p>
                <p> {item.place} </p>
                <p> {item.description} </p>
            </div>
        );
    });
    return (
        <div className="description">
            <Typography variant="h4" component="h3">
                {props.data.name}
            </Typography>
            <Typography component="p" variant="body1">
                Род деятельности: <span>{props.data.occupation}</span>
            </Typography>
            <Typography component="p" variant="body1">
                Родился: <span>{props.data.birthDate}</span> <i>{props.data.birthPlace}</i>
            </Typography>
            <Typography component="p" variant="body1">
                Умер: <span>{props.data.deathDate}</span> <i>{props.data.deathPlace}</i>
            </Typography>
            <Typography component="p" variant="body1">
                Деятельность:
                {activity}
            </Typography>

        </div>
    )
}

export default Description;
