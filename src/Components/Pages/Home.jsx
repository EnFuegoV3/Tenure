import { 
    Grid, 
    GridItem, 
    Flex, 
    Box, 
    Text, 
    Stack, 
    IconButton, 
    VStack, 
    Avatar, 
    Heading, 
    Tabs, 
    TabList, 
    Tab, 
    TabPanels, 
    TabPanel,
    Input,
} from "@chakra-ui/react"
import CircumIcon from "@klarr-agency/circum-icons-react"
import { useEffect, useState } from "react"
import { Clock } from "../Clock"
import { nanoid } from "nanoid"

export function Home() {

    

    const [jobs, setJobs] = useState([])

    const [selectedJob, setSelectedJob] = useState('')

    const [editJobName, setEditJobName] = useState(false)

    function changeJobName() {
        setEditJobName(prev => !prev);
    }

    function handleNameChange(){
        const {name, value} = event.target;
        setJobs(prevJobs => prevJobs.map(job => {
            return job.id === selectedJob.id ? {...job, [name]: value} : job
        }))
        setSelectedJob({...selectedJob, name: value})
    }


    const displayJobs = jobs.map((job, index)=> <Flex key={index} gap='5px' p='5px' border={job.id === selectedJob.id ? '1px solid black' : ''}>
                                                    <Text
                                                        as='Button'
                                                        fontFamily={'prompt'}
                                                        fontSize='1.1rem'
                                                        color={job.id === selectedJob.id ? '#e94e4e' : ''}
                                                        onClick={() => {selected(job)}}
                                                        >
                                                           { editJobName ? <Input 
                                                                                placeholder={job.name} 
                                                                                type="text"
                                                                                name="name"
                                                                                value={job.name}
                                                                                onChange={handleNameChange}
                                                                            /> 
                                                                            : `${job.name}`}
                                                    </Text>
                                                    <IconButton
                                                        ml='10px'
                                                        id={job.id}
                                                        variant='ghost'
                                                        size='xs'
                                                        onClick={changeJobName}
                                                        icon={ !editJobName ? <CircumIcon name="edit" color='black' size='20px'/> : <CircumIcon name="square_check" color='green' size='20px'/>}
                                                    />
                                                    <IconButton
                                                        id={job.id}
                                                        variant='ghost'
                                                        size='xs'
                                                        icon={<CircumIcon name="trash" color='black' size='20px'/>}
                                                    />
                                                </Flex>
                                                        )

    // function editJobName(){
        
    // }
    
    function selected(job){
        setSelectedJob(job)
        
    }

    function addJob() {
        console.log(jobs)
        setJobs(prevJobs => {
            return [
                ...prevJobs,
                {
                    name: 'New Job',
                    id: nanoid(),
                    dates: {
                        date: '',
                        hours: ''

                    }
                }
            ]
        })
        
    }    

    

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
                    <IconButton
                        color='#0a2342'
                        variant='ghost'
                        icon={<CircumIcon name="circle_plus" />}
                        onClick={addJob}
                    />
                    {displayJobs}
                </VStack>
            </GridItem>
            <GridItem bg='white' display='flex' justifyContent='center' alignItems='center'>
                { selectedJob ?
                <Clock 
                    selectedJob={selectedJob}
                /> : "Select a Job or create a new one!"}
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