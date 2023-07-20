import { Button, Flex, Text, Container, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import { useStopwatch } from "react-timer-hook";


export function Clock({selectedJob}) {
    dayjs.extend(relativeTime)

    const [jobNameHeading, setJobNameHeading] = useState('')

    useEffect(() => {
        setJobNameHeading(selectedJob.name)
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
        
    }
 

    return (
        
        <Flex direction='column' align='center' gap='10px' h='100%'>
            <Heading>{jobNameHeading}</Heading>
            <Flex direction='column' gap='10px' justify='center' align='center'>
                <Button colorScheme="green" onClick={clockIn}>Clock In</Button>
                <Text>{clockInTime.displayTime}</Text>
            </Flex>
            <Container bg='teal' maxW='sm'>{hours} Hours {minutes} Minutes</Container>
            <Flex direction='column' gap='10px' justify='center' align='center'>
                <Text>{clockOutTime.displayTime}</Text>
                <Button colorScheme="red" onClick={clockOut}>Clock Out</Button>
            </Flex>
        </Flex>

    )
}