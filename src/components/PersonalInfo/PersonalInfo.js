import React from 'react';
import Typography from '@material-ui/core/Typography';

function PersonalInfo(props) {
  return (
    <div className="person-info-container">
      <Typography variant="h5" component="h4">
        <p>{props.data.name}</p>
      </Typography>
      <Typography component="p" variant="subtitle2">
        <a href={props.data.gitLink} target="_blank" rel="noopener noreferrer">
          GitHub <span>{props.data.gitLink}</span>
        </a>
      </Typography>
      <Typography component="p" variant="subtitle2">
        <a href={props.data.mailLink} target="_blank" rel="noopener noreferrer">
          EMAIL: <span>{props.data.mailLink}</span>
        </a>
      </Typography>
      <Typography component="p" variant="subtitle3" className="information">
        {props.data.partOfWork}
      </Typography>
    </div>
  );
}

export default PersonalInfo;
