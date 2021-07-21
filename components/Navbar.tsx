import React, { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: React.FC = () => {
    const router = useRouter()

    const navbarBurger = useRef<HTMLButtonElement>(null)
    const navbarMenu = useRef<HTMLDivElement>(null)

    const toggleBurgerHandler = () => {
        const currentAriaValue = navbarBurger.current?.getAttribute('aria-expanded')

        navbarBurger.current?.setAttribute('aria-expanded', currentAriaValue === 'false' ? 'true' : 'false')
        navbarBurger.current?.classList.toggle('is-active')
        navbarMenu.current?.classList.toggle('is-active')
    }

    const navigateHandler = () => {
        router.push('/')
        // router.push({
        //     pathname: '/person/[id]/[resource]',
        //     query: { id: 1, resource: 'contacts' },
        // })
    }

    return (
        <nav className='navbar is-dark is-spaced' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <button className='navbar-burger' onClick={toggleBurgerHandler} aria-label='menu'
                        aria-expanded='false'
                        data-target='navbar-menu' ref={navbarBurger}>
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                    <span aria-hidden='true' />
                </button>
            </div>
            <div className='navbar-menu' id='navbar-menu' ref={navbarMenu}>
                <div className='navbar-start'>
                    <Link href='/'>
                        <a className='navbar-item'>Home</a>
                    </Link>
                    <Link href='/events'>
                        <a className='navbar-item'>Events</a>
                    </Link>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item' aria-hidden>
                        <button className='button' onClick={navigateHandler}>Go Programmatically</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

/**
 * Next uses a File based routing system. That uses files and folders names to create the routing system
 */
