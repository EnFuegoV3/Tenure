import { Grid, GridItem, Flex, Box, Text, Stack, VStack, Avatar, Heading } from "@chakra-ui/react"
import CircumIcon from "@klarr-agency/circum-icons-react"
import { useState } from "react"


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
    
    const displayJobs = jobs.map((job, index)=> <Text key={index}>{job.name}</Text>)


    const [currentDate, setCurrentDate] = useState()

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
                <Heading textAlign='center' mt='1em' fontStyle='italic' fontWeight="700" color='#0a2342' fontFamily={'Prompt'}>Jobs</Heading>
                <VStack spacing='25px'>
                    {displayJobs}
                </VStack>
            </GridItem>
            <GridItem bg='white'></GridItem>
            <GridItem bg='#d8e2dc' boxShadow='inner'></GridItem>

        </Grid>
        
    )
}