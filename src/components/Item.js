import React from 'react';
import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
        <Link to={`/character/${props.character.id}`} >
            <li className="character__list--item">
                <img className="character__pic" src={props.character.image} alt={props.character.name} />
                <div className="character__info">
                    <p className="character__name"> {props.character.name} </p>
                    <span className="character__species">{props.character.species} </span>
                </div>
            </li>
        </Link>)
}

export default Item;