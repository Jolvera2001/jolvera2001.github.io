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

} from '@chakra-ui/react'
import JolveraRedDoor from './assets/JolveraRedDoor.jpg'
import personalData from './assets/personalData.json'
import NILogo from './assets/ni.webp'

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
              <Tab onClick={() => handleTabClick('contact')} isSelected={activeTab === 'contact'}>Contact</Tab>
            </TabList>
          </Tabs>
        </VStack>
      </Box>
      <Box w="70%" p={5} overflowY='auto' maxH='100vh'>
        <Container maxW='3xl'>
          {activeTab === 'aboutMe' &&
          <SlideFade in={activeTab === 'aboutMe'}>
            <Box p={5} m={5}>
              <Heading>About Me</Heading>
            </Box>
          </SlideFade>
          }
          {activeTab === 'experience' &&
          <SlideFade in={activeTab === 'experience'}>
            <Box p={5} m={5}>
              <Stack spacing={5}>
                <Heading size='2xl'>Experience</Heading>
                <Divider borderWidth='2px' borderColor='black' />
                {personalData.experienceData.map((item) => (
                  <Box key={item.id}>
                    <HStack>
                      <Avatar name='NI' src={NILogo} size='md' />
                      <Heading size='lg'>{item.company}</Heading>
                    </HStack>
                    <Heading size='md'>{item.name}</Heading>
                    <Text as='b'>{item.date}</Text>
                    <Heading size='sm'>Skills:</Heading>
                    <Text mb={2}>{item.skills}</Text>
                    <Heading size='sm'>Description:</Heading>
                    <Text>{item.description}</Text>
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
                <Heading size='2xl'>Projects</Heading>
                <Divider borderWidth='2px' borderColor='black' />
                {personalData.projectsData.map((item) => (
                  <Box key={item.id}>
                    <Heading size='md'>{item.name}</Heading>
                    <Text as='b'>{item.date}</Text>
                    <Text mb={2}>Status: {item.status}</Text>
                    <Heading size='sm'>Skills:</Heading>
                    <Text mb={2}>{item.skills}</Text>
                    <Heading size='sm'>Description:</Heading>
                    <Text>{item.description}</Text>
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
              <Heading>Hobbies</Heading>
            </Box>
          </SlideFade> 
          }
          {activeTab === 'contact' &&
          <SlideFade in={activeTab === 'contact'}>
            <Box p={5} m={5}>
              <Heading>Contact</Heading>
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
