import React, {ReactNode, useState} from 'react';
import s from "./checkbox.module.scss"

interface ICheckboxProps {
    name: string;
    label: string |  ReactNode
    isDisabled?: boolean;
    isChecked?: boolean;
}
const Checkbox = ({name, label, isChecked = false, isDisabled}: ICheckboxProps) => {
    const [checked, setChecked] = useState(isChecked);
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(evt.target.checked)
    }

    return (
        <label htmlFor={name} className={s.checkbox} >
            <input
                type="checkbox"
                id={name} name={name}
                className={s.checkbox__nativeBox}
                onChange={handleChange}
                checked={checked}
                disabled={isDisabled}
            />
            <div className={s.checkbox__customBox} />
            <div className={s.checkbox__label}>{label}</div>
        </label>
    );
};
export default Checkbox;