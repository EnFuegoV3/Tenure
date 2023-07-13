import { Grid, GridItem, Flex, Box, Text, Stack, VStack, Avatar, Heading, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import CircumIcon from "@klarr-agency/circum-icons-react"
import { useState } from "react"
import { Clock } from "../Clock"

export function Home() {

    const [jobs, setJobs] = useState(
        [
            {
                name: 'Cosco',
                dates: {
                    date: '',
                    hours: ''
                }
            },
            {
                name: 'Freelance',
                dates: {
                    date: '',
                    hours: ''
                }
            },
            
        ]
    )
    
    const displayJobs = jobs.map((job, index)=> <Text 
                                                    as='Button'  
                                                    key={index}
                                                    fontFamily={'prompt'}
                                                    fontSize='1.1rem'
                                                    >
                                                        {job.name}
                                                </Text>)


    

    return (
        <Grid 
            templateColumns='.2fr .6fr 2fr'
            templateRows='2fr 1fr'
            h='calc(100dvh - 100px)'
            
        >
            <GridItem rowSpan={2} bg='#0a2342' position='relative'>
                <VStack p='1em' spacing='35px'>
                    <Avatar name="Antonio" src='blank' />
                    <CircumIcon name="box_list" color='white' />
                    <CircumIcon name="calendar" color='white'/>
                </VStack>
            </GridItem>
            <GridItem rowSpan={2} bg='white' maxW='400px' boxShadow='2xl' position='relative'>
                <Heading textAlign='center' mt='1em' textDecoration='underline' fontStyle='italic' fontWeight="700" color='#0a2342' fontFamily={'Prompt'}>Jobs</Heading>
                <VStack spacing='25px' mt='25px'>
                    {displayJobs}
                </VStack>
            </GridItem>
            <GridItem bg='white' display='flex' justifyContent='center' alignItems='center'>
                <Clock />

            </GridItem>
            <GridItem bg='#d8e2dc' boxShadow='inner'>
                <Tabs align="center">
                    <TabList>
                        <Tab>Summary</Tab>
                        <Tab>Weekly log</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>info</TabPanel>
                        <TabPanel>calendar</TabPanel>
                    </TabPanels>
                </Tabs>
            </GridItem>

        </Grid>
        
    )
}