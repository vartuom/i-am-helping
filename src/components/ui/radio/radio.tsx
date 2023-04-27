import React from 'react';
import s from "./radio.module.scss"

interface Props extends React.PropsWithRef<JSX.IntrinsicElements["input"]> {
    label: string;
}
const Radio = React.forwardRef<HTMLInputElement, Props>(({label, ...props}, ref) => {
    return (
        <label className={s.radio}>
            <input
                {...props}
                type={"radio"}
                ref={ref}
                className={s.radio__nativeBox}
            />
            <p className={s.radio__customBox}>{label}</p>
        </label>
    );
});

export default Radio;