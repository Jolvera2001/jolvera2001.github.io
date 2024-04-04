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

} from '@chakra-ui/react'
import personalData from './assets/personalData.json'
import NILogo from './assets/ni.webp'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

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
            <Link href='https://github.com/Jolvera2001'>
              <Icon as={FaGithub} boxSize={12} />
            </Link>
            <Link href='https://www.linkedin.com/in/johan-olvera-b47a9b205/'>
              <Icon as={FaLinkedin} boxSize={12}/>
            </Link>
          </HStack>
        </VStack>
      </Box>
      <Box w="70%" p={5} overflowY='auto' maxH='100vh'>
        <Container maxW='3xl'>
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
                      <Avatar name='NI' src={NILogo} size='md' />
                      <Heading size='lg'>{item.company}</Heading>
                    </HStack>
                    <Heading size='lg'>{item.name}</Heading>
                    <Text as='b' fontSize='lg'>{item.date}</Text>
                    <Heading size='md' mt={2} >Skills:</Heading>
                    <Text mb={2} fontSize='lg'>{item.skills}</Text>
                    <Heading size='md'>Description:</Heading>
                    <Text fontSize='lg'>{item.description}</Text>
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
                    <Text as='b' fontSize='lg'>{item.date}</Text>
                    <Text mb={2} fontSize='lg'>Status: {item.status}</Text>
                    <Heading size='md'>Skills:</Heading>
                    <Text mb={2} fontSize='lg'>{item.skills}</Text>
                    <Heading size='md'>Description:</Heading>
                    <Text mb={5} fontSize='lg'>{item.description}</Text>
                    <HStack>
                      <Link href={item.link}>
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
              <Stack>
                <Center>
                  <Heading>Hobbies</Heading>
                </Center>
                <Divider borderWidth='1.5px' borderColor='black' />
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
