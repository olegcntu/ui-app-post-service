import React from 'react';
import cl from "./Select.module.css"
const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={cl.default_btn}
        value={value}
        onChange={event=>onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;