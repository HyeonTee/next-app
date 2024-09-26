import {
  Container,
  Heading,
  List,
  ListItem,
  Flex,
  Text,
} from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { MdOutlineEmail } from 'react-icons/md'
import { FaJava, FaNodeJs, FaPython, FaAws } from 'react-icons/fa'
import { FaGitAlt, FaDocker } from 'react-icons/fa6'
import { SiSpring, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

const About = () => (
  <Container>
    <Section delay={0.2}>
      <Heading as="h2" variant="page-title">
        김현태
      </Heading>
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <Flex wrap="wrap" justify="space-around" align="center">
        <Flex direction="column" align="center" m={4}>
          <SiSpring size="40px" />
          <Text mt={2}>Spring</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaJava size="40px" />
          <Text mt={2}>Java</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaNodeJs size="40px" />
          <Text mt={2}>Node.js</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <RiNextjsFill size="40px" />
          <Text mt={2}>Next.js</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <SiPostgresql size="40px" />
          <Text mt={2}>PostgreSQL</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <SiMysql size="40px" />
          <Text mt={2}>MySQL</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <SiMongodb size="40px" />
          <Text mt={2}>MongoDB</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaPython size="40px" />
          <Text mt={2}>Python</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaAws size="40px" />
          <Text mt={2}>AWS</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaGitAlt size="40px" />
          <Text mt={2}>Git</Text>
        </Flex>
        <Flex direction="column" align="center" m={4}>
          <FaDocker size="40px" />
          <Text mt={2}>Docker</Text>
        </Flex>
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
        Elice Cloud Track
      </BioSection>
      <BioSection>
        <BioYear>2024.09 - now</BioYear>
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

export default About
