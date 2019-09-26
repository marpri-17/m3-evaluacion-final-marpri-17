import React from 'react';
import Item from './Item';



const List = props => {
    debugger;
    return (
        <ul className="character__list--list">
            {props.characters.map(character =>
                <Item character={character} key={`id${character.id}`} />)
            }
        </ul>
    )
}

export default List; 