import { Button, Flex, Text, Container } from "@chakra-ui/react"
import { useState } from "react"
import dayjs from "dayjs";


export function Clock() {
    
    const [clockInTime, setClockInTime] = useState({})
    const [clockOutTime, setClockOutTime] = useState({})

    const timeObject = () => {
        let date = new Date()
        let time = date.toLocaleTimeString()

        return {
            displayTime: time,
            hour: date.getHours(),
            minute: date.getMinutes()
        }
    }

    function clockIn() {
        setClockInTime(timeObject)
    }

    function clockOut() {
        setClockOutTime(timeObject)
    }
    

    return (
        <Flex direction='column' align='center' gap='10px'>
            <Flex>
                <Button colorScheme="green" onClick={clockIn}>Clock In</Button>
                <Text>{clockInTime.displayTime}</Text>
                
            </Flex>
            <Container bg='teal' maxW='sm'>sdasd</Container>
            <Flex>
                <Button colorScheme="red" onClick={clockOut}>Clock Out</Button>
                <Text>{clockOutTime.displayTime}</Text>
            </Flex>
        </Flex>

    )
}