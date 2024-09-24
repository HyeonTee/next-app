import NavBar from './navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from './footer'


const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <NavBar />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main