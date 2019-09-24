import React from 'react';
import '../stylesheets/form.scss';
const renderSelect = (origins, liftingFnc) => {
    if (origins) {
        return (
            <div className="form__select--wrapper">
                <label className="form__select--label">Planeta</label>
                <select className="form__select" onChange={liftingFnc}>
                    {origins.map((origin, index) => {
                        return (<option className="form__select--item" key={index + origin} value={origin}>{origin}</option>)
                    })}
                </select>
            </div >
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
                {renderSelect(props.origins, props.handleSelect)}
            </div>
        </form>)
}

export default Form;