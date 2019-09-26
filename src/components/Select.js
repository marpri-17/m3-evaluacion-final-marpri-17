import React from 'react';

const RenderSelect = (props) => {
    return (
        <div className="form__select--wrapper">
            <label className="form__select--label">Planeta</label>
            <select className="form__select" onChange={props.handleSelect}>
                <option className="form__select--item" key="origin__all" value=""> All</option>
                {props.origins.map((origin, index) => {
                    return (<option className="form__select--item" key={index + origin} value={origin}>{origin}</option>)
                })}
            </select>
        </div >
    )
}

export default RenderSelect;