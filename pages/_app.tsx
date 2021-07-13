import type { AppProps } from 'next/app'
import '../styles/globals.css'

// This component is a wrapper for all components
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp

/**
 * Next uses a File based routing system. That uses files and folders names to create the routing system
 */
