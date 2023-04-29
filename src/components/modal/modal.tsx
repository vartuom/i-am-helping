import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modalOverlay/modalOverlay";
import s from "./modal.module.scss";

const modalRoot = document.getElementById("modals") as HTMLElement;

interface IPropsModal {
    children: ReactNode;
    onClose: () => void;
    isModalOpened: boolean;
}

const Modal = (props: IPropsModal) => {
    const { children, onClose, isModalOpened } = props;
    useEffect(() => {
        function closeByEscape(evt: KeyboardEvent) {
            if (evt.key === "Escape") onClose();
        }
        if (isModalOpened) {
            document.addEventListener("keydown", closeByEscape);
            return () => {
                document.removeEventListener("keydown", closeByEscape);
            };
        }
        return undefined;
    }, [isModalOpened, onClose]);

    return ReactDOM.createPortal(
        <div className={s.root}>
            <div className={s.container}>
                <button
                    type="button"
                    className={s.closeButton}
                    aria-label="Закрыть"
                    onClick={onClose}
                />
                {children}
            </div>
            <ModalOverlay handleCloseAction={onClose} />
        </div>,
        modalRoot
    );
};

export default Modal;
