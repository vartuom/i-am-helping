import React from "react";
import s from "./ModalOverlay.module.scss";

function ModalOverlay({
                          handleCloseAction,
                      }: {
    handleCloseAction: () => void;
}) {
    return (
        <div
            aria-hidden="true"
            className={s.overlay}
            onClick={handleCloseAction}
        />
    );
}
export default ModalOverlay;
