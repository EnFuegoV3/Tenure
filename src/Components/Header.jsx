import { Flex, Spacer, Box, Text } from "@chakra-ui/react"
import Logo from "./Logo"
import { SignUpModal } from "./SignUp"
import { Link } from "react-router-dom"

// add live time to header?

export function Header(props){
    return (
        <Flex as='header' bgColor='#d8e2dc' justify="space-between" align='center' w='100%' padding='1rem'>
            <Logo />
            <Flex as="nav" gap='10' color='#686963' fontSize='xl' fontWeight='bold' fontFamily={'prompt'}>
                <SignUpModal />
                {/* <Text _hover={{color: "#e94e4e", fontStyle: 'italic'}} className="nav-items">Sign up</Text> */}
                <Text _hover={{color: "#e94e4e", fontStyle: 'italic'}} className="nav-items"><Link to='/home'>Log in</Link></Text>
            </Flex>
        </Flex>
        

    )
}
