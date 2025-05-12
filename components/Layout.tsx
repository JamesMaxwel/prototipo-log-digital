import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" bg="white" boxShadow="sm" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0066cc' }}>
              Gabijú Digital
            </Link>
          </Flex>
        </Container>
      </Box>

      <Box flex="1">
        {children}
      </Box>

      <Box as="footer" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Text textAlign="center" color="gray.600">
            © 2024 Transportadora Gabijú. Todos os direitos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}

export default Layout 