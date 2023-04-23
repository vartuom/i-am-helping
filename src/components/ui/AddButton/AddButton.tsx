import './AddButton.scss'
import { FC } from 'react';

interface IButton {
  onClick?: () => unknown;
  extraClass?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const AddButton: FC<IButton> = ({
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
   <button
     className='button'
     onClick={onClick}
     disabled={disabled}
     type={type}
   />
  );
};

export default AddButton;