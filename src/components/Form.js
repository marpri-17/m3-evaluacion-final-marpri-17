import React from 'react';
import '../stylesheets/form.scss';
import RenderSelect from './Select';


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
                <RenderSelect origins={props.origins} handleSelect={props.handleSelect} />
            </div>
        </form>)
}

export default Form;