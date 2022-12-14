import '../styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/napalearn.css'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import LoadingGIF from "../components/Loading";

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)});

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<div className='spinner-wrapper'>
    <LoadingGIF/></div>)
}

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
  <Loading/>
  <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
