import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Heading>Home</Heading>
      <Image
        src="/dev_ggamja.jpg"
        width="1000"
        height="1000"
      />
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
