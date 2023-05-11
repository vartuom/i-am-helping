import React, {useState} from 'react';
import s from "./radioGroup.module.scss";

interface IRadioGroup {
    name: string;
    values: Array<{
        value: string;
        label: string;
    }>
}

const RadioGroup = ({name, values}: IRadioGroup) => {
    const [value, setValue] = useState("");
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.stopPropagation();
        setValue(evt.target.value);
    }

    return (
        <div className={s.radioGroup} onChange={handleChange}>
            {values.map((item) => (
                <label className={s.radio}>
                    <input
                        type={"radio"}
                        name={name}
                        value={item.value}
                        checked={value === item.value}
                        className={s.radio__nativeBox}
                    />
                    <p className={s.radio__customBox}>{item.label}</p>
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;