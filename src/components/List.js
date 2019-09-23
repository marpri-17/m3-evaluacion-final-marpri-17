import React from 'react';
import Item from './Item';

const List = props =>{
    debugger;
    return(
        <ul className="character__list--list">
            {props.characters.map(character => <Item character={character}/>)}
        </ul>
    )
}

export default List; 