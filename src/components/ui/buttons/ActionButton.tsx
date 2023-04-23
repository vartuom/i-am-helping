import React from 'react';
import './ActionButton.scss';

interface ActionButtonProps {
  variant?: "icon" | "text";
  size?: "small" | "medium" | "large";
  color?: "light" | "dark" | "grey" | "lightdark";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  children?: React.ReactNode;
  icon?: boolean;
}

export const ActionButton = ({
  variant,
  size,
  color = "dark",
  label = "",
  icon,
  ...props
}: ActionButtonProps) => {
  const variantType = variant === "icon" ? "button--icon" : "button--text";
  const sizeType = size === "small" ? "button--small" : size === "medium" ?  "button--medium" : "button--large";
  const colorType = color === "dark" ? "button--dark" : color === "light" ?  "button--light" : color === "lightdark" ? "button--lightdark" : "button--grey";

  return (
    <button
      type="button"
      className={['button', variantType, sizeType, colorType].join(' ')}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};
