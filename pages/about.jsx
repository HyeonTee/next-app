import {
  Container,
  Heading,
  List,
  ListItem,
  Flex,
  Text,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { MdOutlineEmail } from 'react-icons/md'
import { FaNodeJs, FaPython, FaAws, FaJava } from 'react-icons/fa'
import { FaGitAlt, FaDocker } from 'react-icons/fa6'
import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiSpring,
  SiTrpc,
  SiRust,
  SiC,
  SiVercel,
} from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import Paragraph from '../components/paragraph'
import PropTypes from 'prop-types'

const SkillCard = ({ icon, label, brandColor }) => {
  const cardBg = useColorModeValue('white', 'whiteAlpha.100')
  const cardHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const textColor = useColorModeValue('gray.800', 'gray.100')

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      m={3}
      p={4}
      borderRadius="xl"
      bg={cardBg}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      transition="transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease"
      _hover={{ transform: 'translateY(-3px)', boxShadow: 'md', bg: cardHoverBg }}
      minW="110px"
    >
      <Box color={brandColor} lineHeight={0}>
        {icon}
      </Box>
      <Text mt={2} fontSize="sm" color={textColor}>
        {label}
      </Text>
    </Box>
  )
}

SkillCard.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  brandColor: PropTypes.string,
}

const About = () => {
  const nextColor = useColorModeValue('#111111', '#E2E8F0')

  return (
    <Container>
      <Section delay={0.2}>
        <Heading as="h2" variant="page-title">
          김현태
        </Heading>

        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          부산대학교 기계공학부를 졸업한 후, 프로그래밍에 흥미가 생겨 컴퓨터
          공학과 백엔드 엔지니어링을 공부하며 개발자로 일하고 있습니다.
        </Paragraph>

        <Heading as="h3" variant="section-title" mt={8}>
          Skills
        </Heading>

        {/* Languages */}
        <Heading as="h4" size="md" mt={4} mb={2}>
          Languages
        </Heading>
        <Flex wrap="wrap" justify="center" align="center">
          <SkillCard icon={<SiTypescript size="40px" />} label="TypeScript" brandColor="#3178c6" />
          <SkillCard icon={<FaNodeJs size="40px" />} label="Node.js" brandColor="#339933" />
          <SkillCard icon={<FaPython size="40px" />} label="Python" brandColor="#3776AB" />
          <SkillCard icon={<FaJava size="40px" />} label="Java" brandColor="#E11F21" />
          <SkillCard icon={<SiC size="40px" />} label="C" brandColor="#A8B9CC" />
          <SkillCard icon={<SiRust size="40px" />} label="Rust" brandColor="#DEA584" />
        </Flex>

        {/* Databases */}
        <Heading as="h4" size="md" mt={6} mb={2}>
          Databases
        </Heading>
        <Flex wrap="wrap" justify="center" align="center">
          <SkillCard icon={<SiPostgresql size="40px" />} label="PostgreSQL" brandColor="#336791" />
          <SkillCard icon={<SiMysql size="40px" />} label="MySQL" brandColor="#4479A1" />
          <SkillCard icon={<SiMongodb size="40px" />} label="MongoDB" brandColor="#47A248" />
        </Flex>

        {/* Frameworks & Tools */}
        <Heading as="h4" size="md" mt={6} mb={2}>
          Frameworks & Tools
        </Heading>
        <Flex wrap="wrap" justify="center" align="center">
          <SkillCard icon={<RiNextjsFill size="40px" />} label="Next.js" brandColor={nextColor} />
          <SkillCard icon={<SiSpring size="40px" />} label="Spring" brandColor="#6DB33F" />
          <SkillCard icon={<SiTrpc size="40px" />} label="tRPC" brandColor="#2596be" />
          <SkillCard icon={<FaAws size="40px" />} label="AWS" brandColor="#FF9900" />
          <SkillCard icon={<FaGitAlt size="40px" />} label="Git" brandColor="#F05032" />
          <SkillCard icon={<FaDocker size="40px" />} label="Docker" brandColor="#2496ED" />
          <SkillCard icon={<SiVercel size="40px" />} label="Vercel" brandColor={nextColor} />
        </Flex>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2017.03 - 2023.02</BioYear>
          부산대학교 기계공학부
        </BioSection>
        <BioSection>
          <BioYear>2023.02 - 2023.07</BioYear>
          SW 사관학교 정글
        </BioSection>
        <BioSection>
          <BioYear>2024.03 - 2024.08</BioYear>
          엘리스 클라우드트랙
        </BioSection>
        <BioSection>
          <BioYear>2024.08 - now</BioYear>
          대륜 개발팀
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <List>
          <ListItem display="flex" alignItems="center">
            <MdOutlineEmail style={{ marginRight: '8px' }} />
            gusxo1820@icloud.com
          </ListItem>
        </List>
      </Section>
    </Container>
  )
}

export default About
