import { Heading } from "@chakra-ui/react";
import Logo from "../Logo";
import { Flex, Box, Text } from "@chakra-ui/react";

export function Home() {
    return (
        <Flex w='100%' justify='center' gap='1em' direction='column' align='center' mt='2em'>
            <Heading fontFamily={'libre franklin'} fontWeight="600">Keeep track of your Hours</Heading>
            <Text>Tenure makes it easy to keep track of your working hours.</Text>
        </Flex>
    )
}