import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import Logo from "./Logo"

export function Footer(props) {
    return (
        <Flex direction='row' justify='center' align='center' bg='#CCCCCC' {...props}>
            
            <Text fontSize=".8rem" p='.6em'>&copy; ARC Designs 2023</Text>
            
            
        </Flex>
    )
}

// #686963