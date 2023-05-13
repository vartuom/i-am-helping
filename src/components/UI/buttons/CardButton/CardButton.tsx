import './CardButton.scss'
import React, { SyntheticEvent } from 'react';

interface ICardButtonProps {
    icon: React.ReactNode;
    display: "web" | "mobile" | "mobile-wide";
    children?: React.ReactNode;
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    isVolunteer?: boolean;
}

export const CardButton = ({
    icon,
    display,
    children,
    onClick,
    isVolunteer,
    ...props
}: ICardButtonProps) => {
    const displayType = display === "web" ? "card-button__web" : display === "mobile" ? "card-button__mobile" : "card-button__mobile-wide";
    const captionType = display === "mobile" || "mobile-wide" ? "card-button__caption" : "";
    const captionWidthType = isVolunteer && display === "mobile" ? "card-button__caption-wide" : "";
    return (
        <button className={['card-button', displayType].join(' ')} onClick={onClick} {...props}>
            {icon}
            <p className={[captionType, captionWidthType].join(" ")}>{children}</p>
        </button>
    )
}