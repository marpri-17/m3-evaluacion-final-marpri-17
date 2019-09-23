import React from 'react';

const Item = (props) =>{
    return(
        <li className = "character__list--item">
            <img className="character__pic" src ={props.character.image} alt= {props.character.name} />
            <p className="character__name"> {props.character.name} </p>
            <p className="character__species">{props.character.species} </p>
        </li>)
}

export default Item;