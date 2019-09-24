import React from 'react';
import '../stylesheets/form.scss';

const Form = (props) => {
    return (
        <form className="form__filter">
            <span className="form__name--wrapper">
                <label htmlFor="name" className="form__name--label">Filtrar</label>
                <input type="text" className="form__name" placeholder="Personaje" onChange={props.searchName} name="name" />
            </span>
            <p className="form__results">{props.searching}</p>
        </form>)
}

export default Form;