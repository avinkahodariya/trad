import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import './header.css';

function Header() {
    const location = useLocation();
    const navarData = [
        {
            id: 0,
            path: '/',
            title: 'Home',
            selected: (location.pathname==='/')?true:false
        },
        {
            id: 2,
            path: '/products',
            title: 'Product',
            selected: (location.pathname==='/products')?true:false
        },
        {
            id: 3,
            path: '/downloads',
            title: 'Downloads',
            selected: (location.pathname==='/downloads')?true:false
        }
    ]

    return (
        <>
            <header className="sticky top-0 z-[1000] text-gray-600 body-font bg-[#0A2A4A] px-10">
                <Navbar data={navarData}/>
            </header>
        </>
    )
}

export default Header