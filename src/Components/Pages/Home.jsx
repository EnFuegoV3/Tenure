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
import { JobList } from "../JobList"

export function Home() {

    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('jobs')) || [])

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }, [jobs])

    const [selectedJob, setSelectedJob] = useState('')

    const [editJobName, setEditJobName] = useState(false)

    function changeJobName() {
        setEditJobName(prev => !prev);
    }
    //need to fix to only change one name
    function handleNameChange(){
        const {name, value} = event.target;
        setJobs(prevJobs => prevJobs.map(job => {
            return job.id === selectedJob.id ? {...job, [name]: value} : job
        }))
        setSelectedJob({...selectedJob, name: value})
    }

    function deleteJob(event, id){
        event.stopPropagation();
        setJobs(prevJobs => prevJobs.filter(job => job.id !== id))
        if(id === selectedJob.id){
            setSelectedJob('')
        }
    }

    // changes selected job state to selected job
    function select(job){
        setSelectedJob(job);
        console.log(job);
    }

    //adds new job
    function addJob() {
        console.log(jobs)
        setJobs(prevJobs => {
            return [
                ...prevJobs,
                {
                    name: 'New Job',
                    id: nanoid(),
                    date: []
                }
            ]
        })
        
    }    

    //change to if date is the same push to same date or if date is not same add new object

    function updateJob(date, hours, minutes){
        setJobs(prevJobs => prevJobs.map(job => {
            return job.id === selectedJob.id ? {...job, date: [...job.date, {date: date, hours: hours, minutes: minutes}]} : job;
        }))
    }
    
    // function updateJob(date, hours, minutes){
    //     setJobs(prevJobs => prevJobs.map(job => {
    //         return job.id === selectedJob.id ? {...job, date: [{date: date, hours: hours, minutes: minutes}]} : job;
    //     }))
    // }

    //maps job names to side bar
    const displayJobs = jobs.map((job, index)=> <JobList  
                                                    key={index}
                                                    job={job}
                                                    selectedJob={selectedJob}
                                                    editJobName={editJobName}
                                                    changeJobName={changeJobName}
                                                    handleNameChange={handleNameChange}
                                                    select={() => select(job)}
                                                    deleteJob={deleteJob}
                                                />)


    
//grid layout of home page
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
                    updateJob={updateJob}
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