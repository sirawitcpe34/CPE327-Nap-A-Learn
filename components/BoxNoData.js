import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

let boxResult = {
    bgColor: Colour.White,
    width: '80%',
    padding: '12px',
    paddingTop: '20px',
    paddingLeft: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '32px',
    marginBottom: '32px',
    boxShadow: 'md',
    p: '6',
    rounded: 'md'
}
let boxButton = {
    bgColor: Colour.White,
    width: '40%',
    padding: '12px',
    marginTop: '24px',
    marginBottom: '24px',
}

// the box that shows case of the questionnaire is not performed
function BoxNoData() {
    return (
        <Flex align="center" justify="center">
            <Box sx={boxResult} align="center" justify="center">
                <Box sx={boxButton}>
                    <Heading>ไม่มีข้อมูลย้อนหลัง</Heading>
                </Box>
            </Box>
        </Flex>
    )
}

export default BoxNoData;