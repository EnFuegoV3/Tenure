import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import Logo from "./Logo"

export function Footer(props) {
    return (
        <Flex direction='row' bg='#686963' {...props}>
            
            <Text fontSize=".8rem" m='auto'>&copy; ARC Designs 2023</Text>
            {/* <Spacer /> */}
            <Logo pr="0rem"/>
            
        </Flex>
    )
}