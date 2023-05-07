import { useRef, useEffect } from "react";
import s from "./Dropdown.module.scss";

type DropdownMenuProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const DropdownMenu = ({ isOpen, children, onClose }: DropdownMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && ref.current &&
        (!ref.current.contains(event.target as Node) && !ref.current.previousSibling?.contains(event.target as Node))) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose, isOpen]);

  // const getMenuPosition = () => {
  //   const buttonRect = ref?.current?.getBoundingClientRect();
  //   if (!buttonRect) return 0;
  //   return {
  //     right: buttonRect.width + 20,
  //   };
  // };

  // const menuStyle = {
  //   ...getMenuPosition()
  // };

  return (
    <div className={s.filter_wrapper} ref={ref}>
      <div className={s.position_absolute}>
        {children}
      </div>
    </div>

  );
};

export default DropdownMenu;