import { Button, Flex, Text, Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import { useStopwatch } from "react-timer-hook";


export function Clock({selectedJob, updateJob, todaysHours}) {
    dayjs.extend(relativeTime)

    const [jobNameHeading, setJobNameHeading] = useState('')

    const {
        minutes,
        hours,
        seconds,
        isRunning,
        start,
        pause,
        reset
    } = useStopwatch()

    useEffect(() => {
        setJobNameHeading(selectedJob.name)
        setClockInTime({});
        setClockOutTime({});
        setHoursWorked({});
        reset(new Date(), false);
    }, [selectedJob.name])
    
    const [clockInTime, setClockInTime] = useState({})
    const [clockOutTime, setClockOutTime] = useState({})
    const [hoursWorked, setHoursWorked] = useState({})

   



    let date = new Date()
    let time = date.toLocaleTimeString()

    const timeObject = () => {
        return {
            displayTime: time,
            date: date,
            hour: date.getHours(),
            minute: date.getMinutes()
        }
    }

    function clockIn() {
        reset(new Date(), false);
        setClockInTime(timeObject)
        start()
        
    }

    function clockOut() {
        setClockOutTime(timeObject)
        pause()
        setHoursWorked(
            {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        )
        updateJob(date.toLocaleDateString(), hours, minutes)
        
       
    }
 

    return (
        
        <Container h={{ medium: '60%'}}>
            <Heading fontFamily='Prompt' textAlign='center' fontSize={{base: '2rem', md: '3rem'}} mb={{base: '1em'}} textDecoration='underline'>{jobNameHeading}</Heading>
            <Flex direction='column' h={{base: '40%', md:'100%'}} justify='center' align='center' gap='2em'>
                
                <Flex direction='column' justify='center' align='center'>
                    <Button colorScheme="green" size={{base:'xs', md: 'md'}} onClick={clockIn}>Clock In</Button>
                    <Text>{clockInTime.displayTime}</Text>
                </Flex>
                <Container textAlign='center' maxW='lg' fontFamily='Prompt' fontSize={{ base: '1.5em', md: '3rem'}}>
                    <Text color='#e94e4e' display='inline' fontWeight='bold' >{hours}</Text> Hours 
                    <Text color='#e94e4e' display='inline' fontWeight='bold' >{minutes}</Text> Minutes
                    {/* <Text color='#e94e4e' display='inline' fontWeight='bold' >{seconds}</Text> Seconds */}
                </Container>
                <Flex direction='column' justify='center' align='center'>
                    <Text>{clockOutTime.displayTime}</Text>
                    <Button colorScheme="red" size={{base:'xs', md: 'md'}} onClick={clockOut}>Clock Out</Button>
                </Flex>
            </Flex>
        </Container>

    )
}