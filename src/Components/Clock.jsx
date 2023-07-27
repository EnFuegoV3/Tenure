import { Button, Flex, Text, Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import { useStopwatch } from "react-timer-hook";


export function Clock({selectedJob, updateJob}) {
    dayjs.extend(relativeTime)

    const [jobNameHeading, setJobNameHeading] = useState('')

    useEffect(() => {
        setJobNameHeading(selectedJob.name)
        setClockInTime({});
        setClockOutTime({});
        setHoursWorked({});
        reset();
    }, [selectedJob.name])
    
    const [clockInTime, setClockInTime] = useState({})
    const [clockOutTime, setClockOutTime] = useState({})
    const [hoursWorked, setHoursWorked] = useState({})

   
    const {
        minutes,
        hours,
        seconds,
        isRunning,
        start,
        pause,
        reset
    } = useStopwatch({autoStart: false})


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
       console.log(hoursWorked) 
    }
 

    return (
        
        <Container h='60%'>
            <Heading fontFamily='Prompt' textAlign='center' fontSize='3rem' textDecoration='underline'>{jobNameHeading}</Heading>
            <Flex direction='column' h='100%' justify='center' align='center' gap='2em'>
                
                <Flex direction='column' justify='center' align='center'>
                    <Button colorScheme="green" onClick={clockIn}>Clock In</Button>
                    <Text>{clockInTime.displayTime}</Text>
                </Flex>
                <Container textAlign='center' maxW='lg' fontFamily='Prompt' fontSize='2.5rem'><Text color='#e94e4e' display='inline' fontWeight='bold' fontSize='3rem'>{hours}</Text> Hours <Text color='#e94e4e' display='inline' fontWeight='bold' fontSize='3rem'>{minutes}</Text> Minutes</Container>
                <Flex direction='column' justify='center' align='center'>
                    <Text>{clockOutTime.displayTime}</Text>
                    <Button colorScheme="red" onClick={clockOut}>Clock Out</Button>
                </Flex>
            </Flex>
        </Container>

    )
}