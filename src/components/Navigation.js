import logo from '../assets/logo.svg'
import menuIcon from '../assets/icon-menu.svg'
import closeMenuIcon from '../assets/icon-menu-close.svg'
import { useState } from 'react'

export default function Navigation () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleOpenMenu = () => {
        const navbar = document.querySelector('.navbar')
        const menuButton = document.querySelector('.menu-btn')

        setIsMenuOpen(!isMenuOpen)

        navbar.classList.toggle('open')
        if (navbar.classList.contains('open')) {
            menuButton.src = closeMenuIcon
        } else {
            menuButton.src = menuIcon
        }

        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <nav className='flex justify-between pb-8 md:pb-12'>
            <img className='h-7 md:h-auto' src={logo} alt="logo" />

            <div className={`overlay ${isMenuOpen ? 'visible' : ''}`}></div>
            
            <ul className='navbar md:flex gap-8 text-neutral-dark-grayish-blue'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>

            <div className='md:hidden close-btn'>
                <button onClick={handleOpenMenu}>
                    <img src={menuIcon} className='menu-btn' alt="" />
                </button>
            </div>
        </nav>
    )
}