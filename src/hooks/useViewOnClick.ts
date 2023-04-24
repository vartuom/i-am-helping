import React, { useState } from 'react'

export const useViewOnClick = ({ initialOpen = false } = {}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return { open, close, isOpen, toggle };
};