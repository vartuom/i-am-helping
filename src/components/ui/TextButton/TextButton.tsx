import './TextButton.scss'
import { FC } from 'react';

interface IButton {
  onClick?: () => unknown;
  extraClass?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  children?: React.ReactNode;
  color?: "light" | "dark";
}

const ActionButton: FC<IButton> = ({
  onClick,
  disabled = false,
  type = 'button',
  color = "light",
  text
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className = {"ActionButton" + " " + (color === 'light' ? "ActionButtonLight": "ActionButtonDark")}
    >
      {text}
    </button>
  );
};

export default ActionButton;