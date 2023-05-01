import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import Filter from '../components/filter/filter';
import './anotherTestPage.scss';
import { Button } from '../components/ui/buttons/Button';
import DropdownMenu from '../components/dropdown/Dropdown';

const AnotherTestPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            Ок, все работает!
            <div className='position_relative'>
                <button onClick={() => setIsOpen(!isOpen)} ref={menuRef}>Click me!</button>
                <DropdownMenu onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    {isOpen &&
                        <div className='wrapper'>
                            <Filter />
                        </div>
                    }
                </DropdownMenu>
            </div>

        </>
    );
};

export default AnotherTestPage;