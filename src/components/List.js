import React from 'react';

const List = props =>{
    debugger;
    return(
        <ul className="character__list--list">
            {props.characters.map(character => {
                return (
                    <li key={`RM${character.id}`}>
                        name : {character.name}
                    </li>)
            })}
        </ul>
    )
}

export default List; 