import React, { FC, useState } from "react";
import s from './Input.module.scss';

interface InputProps{
  typeInput: string;
}

const Input: FC<InputProps> = (props) => {
  const { typeInput } = props;
  let options = {
    labelText: '',
    placeholder: '', 
  }

  if(typeInput === 'name') {
    options.labelText = 'Имя';
    options.placeholder = 'Введите имя';
  } else if (typeInput === 'number') {
    options.labelText = 'Телефон';
    options.placeholder = '1234 5678 9000';
  } else {
    options.labelText = 'Неверно';
    options.placeholder = 'проверьте typeInput';
  }

  const [value, setValue] = useState('');
  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(e.target.value)
  };

  return (
        <div className={s.wrap}>
          <label className={s.label}>{options.labelText}</label>
          <input type="text" className={s.input} placeholder={options.placeholder} value={value} onChange={onChange}/>
        </div>
  )
}

export default Input;