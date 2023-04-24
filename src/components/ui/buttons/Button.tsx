import React from 'react';
import './Button.scss';

interface ButtonProps {
  variant?: "icon" | "text" | "mixed";
  size?: "small" | "medium" | "extra-medium" | "large";
  color?: "light" | "dark" | "grey" | "light-dark";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  figure?: "close" | "edit" | "romb-big";
  hasBorder?: boolean;
}

export const Button = ({
  variant,
  size,
  color,
  icon,
  label,
  figure,
  hasBorder,
  type = "button",
  ...props
}: ButtonProps) => {
  const variantType = variant === "icon" ? "button-icon" : variant === "text" ? "button-text" : variant === "mixed" ? "button-mixed" : "";
  const sizeType = size === "small" ? "button-small" : size === "medium" ?  "button-medium" : size === "large" ? "button-large" : size === "extra-medium" ? "button-extra-medium" : "";
  const colorType = color === "dark" ? "button-dark" : color === "light" ?  "button-light" : color === "light-dark" ? "button-lightdark" : color === "grey" ? "button-grey" : "";
  const figureType = figure === "close" ? "button-close" : figure === "edit" ? "button-edit" : "";
  const borderType = hasBorder ? "button-bordered" : "";

  return (
    <button
      className={['button', variantType, figureType, sizeType, colorType, borderType].join(' ')}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};