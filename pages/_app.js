import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      
      <main className='header'>
        <Component {...pageProps} />
      </main>
    
    </>
  )
}

export default MyApp
