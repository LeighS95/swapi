import React from 'react';
import Star from './Star';
import './Card.css';

const Card = props => {

    const { name, model, crew, passengers, films, mostFilms } = props;

    return (
        <div className="Card">
            <div className="Card__Title">
                <div className="Card__Title_Content">
                    <h1>{name}</h1>
                    <p>{model}</p>
                </div>
                {mostFilms ? (
                    <Star active />
                ): (
                    null
                )}
            </div>
            <div className="Card__Content">
                <div className="Card__Content_Crew">
                    <h3>{crew}</h3>
                    <p>Crew</p>
                </div>
                <div className="Card__Content_Passengers">
                    <h3>{passengers}</h3>
                    <p>Passengers</p>
                </div>
                <div className="Card__Content_Films">
                    <h3>{films.length}</h3>
                    <p>Films</p>
                </div>
            </div>
        </div>
    )
}

export default Card;