import React from 'react';
import { Link } from 'react-router-dom';

const Detail = props => {
    debugger;
    console.log(props)
    return (
        <div>
            <Link to="/">
                <span className="detail__navigation"> <i className="fas fa-chevron-left"></i> Volver</span>
            </Link>
            <h4>{props.character.name}</h4>
            <img className="detail__pic" src={props.character.image} alt={props.character.name} />
            <p className="detail__category">Status:
            <span className="detail__category--item">{props.character.status}</span></p>
            <p className="detail__category">Specie: <span className="detail__category--item">{props.character.species}</span></p>
            <p className="detail__category">Origin: <span className="detail__category--item">{props.character.origin}</span></p>
            <p className="detail__category">Episodes: <span className="detail__category--item">{props.character.episodes}</span></p>
        </div>
    )
}

export default Detail;