import React from 'react';
import './Button.scss';
import { AcceptBlockIcon, PhoneIcon } from '../icons/icons';

interface ButtonProps {
  variant?: "icon" | "text";
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "grey" | "light-dark";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  figure?: "close" | "edit" | "romb-big";
}

export const Button = ({
  variant,
  size,
  color,
  icon,
  label,
  figure,
  type = "button",
  ...props
}: ButtonProps) => {
  const variantType = variant === "icon" ? "button-icon" : variant === "text" ? "button-text" : "";
  const sizeType = size === "small" ? "button-small" : size === "medium" ?  "button-medium" : size === "large" ? "button-large" : "";
  const colorType = color === "dark" ? "button-dark" : color === "light" ?  "button-light" : color === "light-dark" ? "button-lightdark" : color === "grey" ? "button-grey" : "";
  const figureType = figure === "close" ? "button-close" : figure === "edit" ? "button-edit" : "";

  return (
    <button
      className={['button', variantType, sizeType, colorType, figureType].join(' ')}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};