import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import Filter from '../components/filter/filter';
import './anotherTestPage.scss';
import { Button } from '../components/ui/buttons/Button';
import DropdownMenu from '../components/dropdown/Dropdown';
import { PageTitleFilter } from '../components/page-title-filter/PageTitleFilter';
import { EPageTitleFilterKind } from '../components/page-title-filter/types';

const AnotherTestPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            Ок, все работает!
            <div className='position_relative'>
                <PageTitleFilter item={EPageTitleFilterKind.Map} onFilterClicked={() => setIsOpen(!isOpen)} />
                <DropdownMenu onClose={() => setIsOpen(false)} isOpen={isOpen}>
                    {isOpen && <Filter />}
                </DropdownMenu>
            </div>

        </>
    );
};

export default AnotherTestPage;