import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Text className="logo" fontSize="2rem" fontStyle='italic' fontWeight="700" color='white' fontFamily={'Prompt'}>
            Tenure
            </Text>
        </Box>
    )
}