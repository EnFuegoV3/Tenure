import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text className="logo" fontSize="2rem" fontWeight="bold" color='white' fontFamily={'Prompt'}>
            Tenure
            </Text>
        </Box>
    )
}