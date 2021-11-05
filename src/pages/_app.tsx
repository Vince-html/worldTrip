import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import '../styles/Global.css'
import { ModalProvider } from '../context/modalContentx'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ChakraProvider>
  )
}

export default MyApp