import { Heading, UnorderedList } from "@chakra-ui/react";
import Logo from "../Logo";
import { Flex, Spacer, Box, Text, Container, List, ListItem, ListIcon, Button } from "@chakra-ui/react";
import { CreateAccountModal } from "../CreateAccount";




export function Home() {
    

    return (
        <Flex maxW='80%' m='auto' justify='center' gap='5em' direction='column' align='center' mt='2em'>
            <Heading fontFamily={'prompt'} fontWeight="600">Track and optimize your work hours with ease.</Heading>
            <Container fontFamily={'libre franklin'} fontSize='1.2rem' lineHeight={1.8} textIndent='20px'>With Tenure, you can effortlessly monitor and record your work hours, making it easier than ever to stay organized and efficient. Whether you're a freelancer, a remote worker or someone looking to track your productivity, Tenure offers a user-friendly interface and great features to help you keep track of your valuable time.</Container>
            <Flex bg='#e94e4e' color='#0a2342' borderRadius={8} w='l' align='center' justify='space-between' mb='5em'>
                <UnorderedList listStyleType='none' fontFamily={'prompt'} fontSize='1.2rem' fontWeight={600} spacing={2} p={2} py={5} mr={8}>
                    <ListItem>
                        - Create jobs
                    </ListItem>
                    <ListItem>
                        - Clock in and Clock out
                    </ListItem>
                    <ListItem>
                        - View Logs
                    </ListItem>
                    
                </UnorderedList>
                <Spacer />
                {/* <Button mr={5} bg='#d8e2dc' cursor='pointer'>Create Account</Button> */}
                <CreateAccountModal />
            </Flex>

        </Flex>
    )
}