import React from 'react';
import '../stylesheets/form.scss';
const renderSelect = origins => {
    if (origins) {
        return (
            <div className="form__select--wrapper">
                <select className="form__select">
                    {origins.map((origin, index) => {
                        return (<option className="form__select--item" key={index + origin}>{origin}</option>)
                    })}
                </select>
            </div>
        )
    }
}

const Form = (props) => {
    return (
        <form className="form__filter">
            <div className="form__input--text">
                <span className="form__name--wrapper">
                    <label htmlFor="name" className="form__name--label">Filtrar</label>
                    <input type="text" className="form__name" placeholder="Personaje" onChange={props.searchName} name="name" />
                </span>
                <p className="form__results">{props.searching}</p>
            </div>
            <div className="form__input--select">
                {renderSelect(props.origins)}
            </div>
        </form>)
}

export default Form;