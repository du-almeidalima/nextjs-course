import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'
import { useRouter } from 'next/router'

// This component is a wrapper for all components
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const navigateHandler = () => {
        router.push('/')
        // router.push({
        //     pathname: '/person/[id]/[resource]',
        //     query: { id: 1, resource: 'contacts' },
        // })
    }

    return (
        <div className='container'>
            <nav className='navbar' role='navigation' aria-label='main navigation'>
                <div className='navbar-menu'>
                    <Link href='/blog/2020/somevalue'>
                        <a className='navbar-item'>Blog</a>
                    </Link>
                    <Link href='/items'>
                        <a className='navbar-item'>Item</a>
                    </Link>
                    <Link href='/person'>
                        <a className='navbar-item'>Person</a>
                    </Link>
                    <Link href='/about'>
                        <a className='navbar-item'>About</a>
                    </Link>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <button className='button' onClick={navigateHandler}>Go Programmatically</button>
                        </div>
                    </div>
                </div>
            </nav>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp

/**
 * Next uses a File based routing system. That uses files and folders names to create the routing system
 */
