import React, {ChangeEvent, ReactNode} from 'react';
import s from "./checkbox.module.scss"

interface ICheckboxProps {
    name: string;
    label: string | ReactNode;
    isDisabled?: boolean;
    isChecked: boolean;
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = ({name, label, isDisabled, isChecked, handleChange}:ICheckboxProps) => {
    return (
        <label className={s.checkbox}>
            <input onChange={handleChange}
                id={name}
                name={name}
                type={"checkbox"}
                disabled={isDisabled}
                checked={isChecked}
                className={s.checkbox__nativeBox}
            />
            <div className={s.checkbox__customBox}/>
            <div className={s.checkbox__label}>{label}</div>
        </label>
    );
};

export default Checkbox;