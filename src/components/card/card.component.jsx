import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img 
            alt='cat'
            src={`https://robohash.org/${props.monster.id}?set=set1&size=150x150`} />
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
        <p>{props.monster.email}</p>
    </div>
)