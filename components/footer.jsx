import { Box, Link, Icon } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Hyeontae&apos;s Homepage
      <Box mt={2}>
        <Link href="https://github.com/HyeonTee" isExternal>
          <Icon as={IoLogoGithub} boxSize={5} />
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
