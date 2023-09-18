//total hours
//daily hours

import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Summary(props) {

    return (
        <Flex>
            <Text>{props.totalHours}</Text>
        </Flex>
    )
}