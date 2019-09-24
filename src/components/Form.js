import React from 'react';
import '../stylesheets/form.scss';

const Form = (props) => {
    return (
        <form className="form__filter">
            <span className="form__name--wrapper">
                <label htmlFor="name" className="form__name--label">Filtrar</label>
                <input type="text" className="form__name" placeholder="Buscar personaje" onChange={props.searchName} name="name" />
            </span>
        </form>)
}

export default Form;