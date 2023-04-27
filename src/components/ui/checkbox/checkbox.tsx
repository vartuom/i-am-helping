import React, {ReactNode} from 'react';
import s from "./checkbox.module.scss"

interface Props extends React.PropsWithRef<JSX.IntrinsicElements["input"]> {
    label: string | ReactNode;
}
const Checkbox = React.forwardRef<HTMLInputElement, Props>(({label, ...props}, ref) => {
    return (
        <label className={s.checkbox}>
            <input
                {...props}
                type={"checkbox"}
                ref={ref}
                className={s.checkbox__nativeBox}
            />
            <div className={s.checkbox__customBox}/>
            <div className={s.checkbox__label}>{label}</div>
        </label>
    );
});

export default Checkbox;