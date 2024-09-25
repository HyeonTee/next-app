import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Home() {
  const greeting = '  안녕하세요, 백엔드 개발자 김현태입니다. '
  const [displayedGreeting, setDisplayedGreeting] = useState('')

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < greeting.length) {
        setDisplayedGreeting((prev) => prev + greeting.charAt(index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [greeting])

  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {displayedGreeting}
      </Box>
    </Container>
  )
}
