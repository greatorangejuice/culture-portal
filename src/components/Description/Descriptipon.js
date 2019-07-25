import React from 'react';

function Description(props) {
    return (
        <div className="description">
            <h1 className="name">{props.data.name}</h1>
            <p className="birth-place">Место рождения: <span>{props.data.birthPlace}</span></p>
        </div>
    )
}

export default Description;
