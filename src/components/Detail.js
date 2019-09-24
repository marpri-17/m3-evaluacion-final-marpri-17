import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/detail.scss';

const Detail = props => {
    debugger;
    console.log(props)
    return (
        <React.Fragment>
            <div className="detail__navigation--wrapper">
                <Link to="/">
                    <span className="detail__navigation"> <i className="fas fa-chevron-left"></i> Volver</span>
                </Link>
            </div>
            <div className="detail__wrapper">
                <img className="detail__pic" src={props.character.image} alt={props.character.name} />
                <div className="detail__category--wrapper">
                    <div className="detail__category--name-wrapper">
                        <h4 className="detail__category--name">{props.character.name}</h4>
                    </div>
                    <p className="detail__category">Status: <span className="detail__category--item">{props.character.status}</span></p>
                    <p className="detail__category">Specie: <span className="detail__category--item">{props.character.species}</span></p>
                    <p className="detail__category">Origin: <span className="detail__category--item">{props.character.origin}</span></p>
                    <p className="detail__category">Episodes: <span className="detail__category--item">{props.character.episodes}</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Detail;