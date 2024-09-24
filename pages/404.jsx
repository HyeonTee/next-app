import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import { motion } from 'framer-motion'

const NotFound = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Container
      maxW="container.md"
      textAlign="center"
      bg={bg}
      p={8}
      borderRadius="lg"
      shadow="xl"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h1" size="2xl" mb={4} color={textColor}>
          404 Not found
        </Heading>
        <Text fontSize="xl" color={textColor} mb={4}>
          페이지를 찾을 수 없습니다.
        </Text>
      </motion.div>

      <Divider my={6} />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Box my={6} align="center">
          <Button
            as={NextLink}
            href="/"
            colorScheme="teal"
            leftIcon={<Icon as={FaHome} />}
            size="lg"
            shadow="md"
          >
            Return to home
          </Button>
        </Box>
      </motion.div>
    </Container>
  )
}

export default NotFound;
