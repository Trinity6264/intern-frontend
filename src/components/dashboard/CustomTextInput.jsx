import React from 'react'

const CustomTextInput = ({onChange,name,id,htmlFor,label,value}) => {
    return (
        <li className="form-list">
            <div className="form-group mb-3">
                <label htmlFor={htmlFor}>{label}</label>
                <textarea
                    name={name}
                    id={id}
                    rows={6}
                    onChange={onChange}
                    value={value}
                    className="form-control"
                    required
                />
            </div>
        </li>
    )
}

export default CustomTextInput