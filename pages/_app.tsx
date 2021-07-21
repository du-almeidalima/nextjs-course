import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

// This component is a wrapper for all components
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='container'>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
