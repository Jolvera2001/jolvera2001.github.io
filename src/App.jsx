import { useState } from 'react'
import {
  Box,
  Container,
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


} from '@chakra-ui/react'
import JolveraRedDoor from './assets/JolveraRedDoor.jpg'

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
      <Box w="70%" p={5}>
        <Container size='sm'>
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
              <Heading>Experience</Heading>
            </Box>
          </SlideFade> 
          }
          {activeTab === 'projects' &&
          <SlideFade in={activeTab === 'projects'}>
            <Box p={5} m={5}>
              <Heading>Projects</Heading>
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
