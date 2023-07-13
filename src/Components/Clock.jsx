import { Button, Flex, Text, Container } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'


export function Clock() {
    dayjs.extend(relativeTime)

    
    const [clockInTime, setClockInTime] = useState({})
    const [clockOutTime, setClockOutTime] = useState({})
    const [currentHours, setCurrentHours] = useState({clockedIn: false, timePassed: ''})

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
        setCurrentHours({...currentHours, clockedIn: true});
        setClockInTime(timeObject)
    }

    function clockOut() {
        setClockOutTime(timeObject)
    }
    // clockInTime.date
    // dayjs(clockInTime.date).fromNow(true)
    useEffect(() => {
        const interval = setInterval(() => {
            if(currentHours.clockedIn){
                const date = dayjs()
                let hours = date.diff(clockInTime.date, 'h')
                let minutes = date.diff(clockInTime.date, 'm')
                setCurrentHours({...currentHours, timePassed: `${hours} hours and ${minutes} minutes` })
                console.log(currentHours.timePassed)
            }  else{clearInterval(interval)}
            
        }, 5000)
        return () => clearInterval(interval)
    }, [currentHours, clockInTime.date])

    return (
        <Flex direction='column' align='center' gap='10px'>
            <Flex direction='column' gap='10px' justify='center' align='center'>
                <Button colorScheme="green" onClick={clockIn}>Clock In</Button>
                <Text>{clockInTime.displayTime}</Text>
                
            </Flex>
            <Container bg='teal' maxW='sm'>{currentHours.timePassed}</Container>
            <Flex gap='20px'>
                <Button colorScheme="red" onClick={clockOut}>Clock Out</Button>
                <Text>{clockOutTime.displayTime}</Text>
            </Flex>
        </Flex>

    )
}