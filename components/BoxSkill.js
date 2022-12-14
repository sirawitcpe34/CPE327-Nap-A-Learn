import React from "react";
import { Box, VStack, Heading, Flex, Image } from "@chakra-ui/react"
import Colour from "../color/napalearncolor"

let boxSkill = {
    bgColor: Colour.White,
    width: '250px',
    height: '180px',
    padding: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'lg',
    rounded: 'md'
}
let boxHeadSkill = {
    bgColor: Colour.White,
    width: '200px',
    height: '50px',
    marginBottom: '12px',
    justifyContent: 'center',
    alignItems: 'center',
}

// pass/fail status of skill box
function BoxSkill({ text, score, image }) {
    return (
        <Box sx={boxSkill}>
            <VStack spacing={0} align="center">
                <Box display='flex' sx={boxHeadSkill}>
                    <Heading align='center' size='md'>{text}</Heading >
                </Box>
                {(score) == 1 ? <Heading size='xl' color='#97CF47'>ผ่าน</Heading> : <Heading size='xl' color='#FF7121'>ไม่ผ่าน</Heading>}
            </VStack>
            <Flex justifyContent='right'>
                <Image src={image} width={8} height={8} marginTop={3} />
            </Flex>
        </Box>
    )
}

export default BoxSkill;