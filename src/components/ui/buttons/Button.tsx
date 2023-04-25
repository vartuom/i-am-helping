import React from 'react';
import './Button.scss';

interface IButtonProps {
  variant?: "icon" | "text";
  size?: "small" | "medium" | "extra-medium" | "large";
  theme?: "light" | "dark" | "grey" | "light-dark";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  icon?: React.ReactNode;
  figure?: "close" | "edit" | "search";
  hasBorder?: boolean;
  animated?: "excel" | "wheel";
}

export const Button = ({
  variant,
  size,
  icon,
  theme,
  label,
  figure,
  hasBorder,
  animated,
  type = "button",
  children,
  ...props
}: IButtonProps) => {
  const variantType = variant === "icon" ? "button-icon" : variant === "text" ? "button-text" : "";
  const sizeType = size === "small" ? "button-small" : size === "medium" ?  "button-medium" : size === "large" ? "button-large" : size === "extra-medium" ? "button-extra-medium" : "";
  const themeType = theme === "dark" ? "button-dark" : theme === "light" ?  "button-light" : theme === "light-dark" ? "button-lightdark" : theme === "grey" ? "button-grey" : "";
  const figureType = figure === "close" ? "button-close" : figure === "edit" ? "button-edit" : figure === "search" ? "button-search" : "";
  const borderType = hasBorder ? "button-bordered" : "";
  const animatedType = animated === "excel" ? "button-excel" : animated === "wheel" ? "button-wheel" : "";

  return (
    <button
      className={['button', variantType, figureType, sizeType, themeType, borderType, animatedType].join(' ')}
      {...props}
    >
      {icon}
      {children}
      {label}
    </button>
  );
};