import { Heading } from "@chakra-ui/react";
import Logo from "../Logo";
import { Flex, Box, Text, Container } from "@chakra-ui/react";

export function Home() {
    return (
        <Flex w='100%' justify='center' gap='1em' direction='column' align='center' mt='2em'>
            <Heading fontFamily={'prompt'} fontWeight="600">Track and optimize your work hours with ease.</Heading>
            <Container fontFamily={'libre franklin'} fontSize='1.2rem' lineHeight={1.5}>With Tenure, you can effortlessly monitor and record your work hours, making it easier than ever to stay organized and efficient. Whether you're a freelancer, a remote worker or someone looking to track your productivity, Tenure offers a user-friendly interface and great features to help you keep track of your valuable time. Stay on top of your work schedule, track projects, and make the most out of your work hours with Tenure.</Container>

        </Flex>
    )
}