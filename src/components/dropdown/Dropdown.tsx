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

  return (
    <div ref={ref} className={s.position_absolute}>
      {children}
    </div>
  );
};

export default DropdownMenu;