import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import Logo from "./Logo"
import { color } from "framer-motion"


export function Header(){
    return (
        <Flex as='header' bgColor='#d8e2dc' justify="space-between" align='center' w='100%' padding='1rem'>
            <Logo />
            <Flex as="nav" gap='10' color='#686963' fontSize='xl' fontWeight='bold'>
                <Text _hover={{color: "#e94e4e"}} className="nav-items">Sign up</Text>
                <Text _hover={{color: "#e94e4e"}} className="nav-items">Log in</Text>
            </Flex>
        </Flex>
        

    )
}