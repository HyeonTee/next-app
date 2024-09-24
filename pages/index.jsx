import { Box, Container, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg"
           mb={6}
           p={3}
           textAlign="center"
           bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
           css={{ backdropFilter: 'blur(10px)' }}
      >
        안녕하세요, 개발자 김현태입니다.
      </Box>
    </Container>
  )
}
