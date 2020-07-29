import React from 'react';

function FormField({ label, type, name, value, onChange, input }) {
    let tag;
    tag = input === true ? <input type={type} name={name} value={value} onChange={onChange} /> 
    : 
    <textarea type={type} name={name} value={value} onChange={onChange} />;
    return (
        <div>
            <label>
                {label}: 
                {tag}
            </label>
        </div>
    )
}

export default FormField;