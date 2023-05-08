import React from 'react';
import './Button.scss';
import clsx from 'clsx';

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
  extraClass?: string;
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
  extraClass = '',
  onClick,
  ...props
}: IButtonProps) => {
  const className = clsx(
    'button',
    {
      [`button-${variant}`]: variant,
    },
    {
      [`button-${size}`]: size,
    },
    {
      [`button-${theme}`]: theme,
    },
    {
      [`button-${figure}`]: figure,
    },
    {
      [`button-bordered`]: hasBorder,
    },
    {
      [`button-${animated}`]: animated,
    },
    extraClass
  )

  return (
    <button className={className} {...props}>
      {icon}
      {children}
      {label}
    </button>
  );
};