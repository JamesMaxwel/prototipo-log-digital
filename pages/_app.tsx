import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      200: '#80b3ff',
      300: '#4d94ff',
      400: '#1a75ff',
      500: '#0052CC', // Cor principal - Azul corporativo
      600: '#0047b3',
      700: '#003d99',
      800: '#003380',
      900: '#002966',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp 