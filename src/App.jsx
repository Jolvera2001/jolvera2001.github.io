import { useState } from 'react'
import {
  Box,
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Center,
  SlideFade,
  Image,
  HStack,
  Divider,
  Icon,
  Link,
  Tooltip,


} from '@chakra-ui/react'
import personalData from './assets/personalData.json'
import NILogo from './assets/ni.webp'
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import resumePDF from './assets/Johan.pdf'

function App() {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
    <Flex>
      <Box w='30%' height="100vh" bg='red.400' pt={32} boxShadow='lg' display='flex' alignContent='center' justifyContent='center'>
        <VStack spacing={5}>
          <Heading>Johan Olvera</Heading>
          <Tabs isLazy orientation='vertical' variant='soft-rounded' size='lg' colorScheme='orange'>
            <TabList>
            <Tab onClick={() => handleTabClick('aboutMe')} isSelected={activeTab === 'aboutMe'}>About Me</Tab>
              <Tab onClick={() => handleTabClick('experience')} isSelected={activeTab === 'experience'}>Experience</Tab>
              <Tab onClick={() => handleTabClick('projects')} isSelected={activeTab === 'projects'}>Projects</Tab>
              <Tab onClick={() => handleTabClick('hobbies')} isSelected={activeTab === 'hobbies'}>Hobbies</Tab>
            </TabList>
          </Tabs>
          <HStack spacing={5}>
            <Tooltip label="My GitHub"> 
              <Link href='https://github.com/Jolvera2001' target='_blank'>
                <Icon as={FaGithub} boxSize={12} />
              </Link>
            </Tooltip>
            <Tooltip label='My LinkedIn'>
              <Link href='https://www.linkedin.com/in/johan-olvera-b47a9b205/' target='_blank'>
                <Icon as={FaLinkedin} boxSize={12}/>
              </Link>
            </Tooltip>
          </HStack>
          <Tooltip label="Downloads a PDF of my resume">
            <Button variant='ghost' as='a' href={resumePDF} download="Johan_Resume.pdf" >Current Resume</Button>
          </Tooltip>
        </VStack>
      </Box>
      <Box w="70%" p={5} overflowY='auto' maxH='100vh'>
        <Container maxW='4xl'>
          {activeTab === 'aboutMe' &&
          <SlideFade in={activeTab === 'aboutMe'}>
            <Box p={5} m={5}>
              <Stack spacing={5}>
                <Center>
                  <Heading>About Me</Heading>
                </Center>
                <Divider borderWidth='1.5px' borderColor='black' />
                <Center>
                  <Text fontSize='3xl' my={5} >{personalData.aboutMeData.intro}</Text>
                </Center>
                <Text fontSize='xl'>{personalData.aboutMeData.body}</Text>
                <Text fontSize='xl'>{personalData.aboutMeData.closing}</Text>
              </Stack>
            </Box>
          </SlideFade>
          }
          {activeTab === 'experience' &&
          <SlideFade in={activeTab === 'experience'}>
            <Box p={5} m={5}>
              <Stack spacing={5}>
                <Center>
                  <Heading>Experience</Heading>
                </Center>
                <Divider borderWidth='1.5px' borderColor='black' />
                {personalData.experienceData.map((item) => (
                  <Box key={item.id}>
                    <HStack mb={2}>
                      <Image name='NI' src={NILogo} boxSize='50px' objectFit='cover' />
                      <Heading size='lg'>{item.company}</Heading>
                    </HStack>
                    <Heading size='lg'>{item.name}</Heading>
                    <Text as='b' fontSize='xl'>{item.date}</Text>
                    <Heading size='md' mt={3} >Skills:</Heading>
                    <Text mb={3} fontSize='xl'>{item.skills}</Text>
                    <Heading size='md'>Description:</Heading>
                    <Text mb={3} fontSize='xl'>{item.description}</Text>
                    <Heading size='md'>Impact:</Heading>
                    <Text fontSize='xl'>{item.impact}</Text>
                    <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </SlideFade> 
          }
          {activeTab === 'projects' &&
          <SlideFade in={activeTab === 'projects'}>
            <Box p={5} m={5}>
              <Stack spacing={4}>
                <Center>
                  <Heading>Projects</Heading>
                </Center>
                <Divider borderWidth='1.5px' borderColor='black' />
                {personalData.projectsData.map((item) => (
                  <Box key={item.id}>
                    <Heading size='lg'>{item.name}</Heading>
                    <Text as='b' fontSize='xl'>{item.date}</Text>
                    <Text mb={3} fontSize='xl'>Status: {item.status}</Text>
                    <Heading size='md'>Skills:</Heading>
                    <Text mb={3} fontSize='xl'>{item.skills}</Text>
                    <Heading size='md'>Description:</Heading>
                    <Text mb={6} fontSize='xl'>{item.description}</Text>
                    <HStack>
                      <Link href={item.link} target='_blank'>
                        <Icon as={FaGithub} boxSize={10} />
                      </Link>
                    </HStack>
                    <Text as='i'>Note: {item.linkDesc}</Text>
                    <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </SlideFade> 
          }
          {activeTab === 'hobbies' &&
          <SlideFade in={activeTab === 'hobbies'}>
            <Box p={5} m={5}>
              <Stack spacing={4}> 
                <Center>
                  <Heading>Hobbies</Heading>
                </Center>
                <Divider borderWidth='1.5px' borderColor='black' />
                {personalData.hobbiesData.map((item) => (
                  <Box key={item.id}>
                    <Heading mb={5} size='lg'>{item.hobby}</Heading>
                    <Text mb={3} fontSize='xl'>{item.description}</Text>
                    <Text fontSize='xl'>{item.plans}</Text>
                    <Divider orientation='horizontal' borderColor="grey" mt={5} mr={2} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </SlideFade> 
          }
        </Container>
      </Box>
    </Flex>
    </>
  )
}

export default App
