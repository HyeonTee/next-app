import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Flex
        mt={4}
        mb={4} // 아래쪽 여백을 추가하여 Box와 텍스트 사이 간격 설정
        justify="center" // 수평 중앙 정렬
        align="flex-start" // 수직 시작점에 맞추기
        w="100%" // Flex의 너비를 100%로 설정
      >
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={4}
        borderStyle="solid"
        w="400px" // 너비를 400px로 조정
        h="400px" // 높이를 400px로 조정
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
        position="relative" // position을 relative로 설정
      >
        <Image
          src="/dev_ggamja.jpg"
          alt="ggamja"
          layout="fill" // Box에 맞게 이미지 크기 조정
          style={{ objectFit: 'cover' }} // CSS 스타일로 objectFit 설정
        />
      </Box>
      </Flex>

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
