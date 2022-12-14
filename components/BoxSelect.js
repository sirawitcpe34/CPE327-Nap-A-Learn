import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react';
import React from "react";
import NextLink from "next/link";
import Colour from "../color/napalearncolor";
import { BiSearchAlt } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";

let line = {
    width: '100%',
    marginTop: '12px',
    height: '2px',
    bgColor: Colour.Darkblue
}
let menu = {
    bgColor: Colour.White,
    width: '450px',
    height: '300px',
    padding: "20px 20px 20px 20px",
    marginTop: '36px',
}
let boxIcon = {
    bgColor: Colour.White,
    width: '36px',
    height: '36px',
}
let boxText = {
    bgColor: Colour.White,
    width: '330px',
    height: '50px',
    marginRight: '10px',
}
let boxComponent = {
    bgColor: Colour.White,
    width: '410px',
    height: '50px',
    marginLeft: '20px',
    marginTop: '40px',
}

// web page access options display box
function BoxSelect({ Header, Link1, Topic1, Link2, Topic2, Icon }) {
    return (
        <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
            <Heading align="left" size='xl'> {Header} </Heading>
            <Box sx={line}></Box>
            <Box sx={boxComponent}
                _hover={{
                    background: "white",
                    fontWeight: 'semibold',
                    color: Colour.FirstPink,
                }}>
                <HStack spacing='24px'>
                    <Box sx={boxIcon}>
                        {(Icon) == 1 ? <BsPlayCircle size={36} color="#ff8515" />
                            : <BiSearchAlt size={36} color="#96cf47" />}
                    </Box>
                    <Flex sx={boxText} alignItems="center">
                        <NextLink href={Link1} passHref>
                            <Link>
                                <Text fontSize='xl' align="left"> {Topic1} </Text>
                            </Link>
                        </NextLink>
                    </Flex>
                </HStack>
            </Box>
            <Box sx={boxComponent}
                _hover={{
                    background: "white",
                    fontWeight: 'semibold',
                    color: Colour.FirstPink,
                }}>
                <HStack spacing='24px'>
                    <Box sx={boxIcon}>
                        {(Icon) == 1 ? <BsPlayCircle size={36} color="#ff8515" />
                            : <BiSearchAlt size={36} color="#96cf47" />}
                    </Box>
                    <Flex sx={boxText} alignItems="center">
                        <NextLink href={Link2} passHref>
                            <Link>
                                <Text fontSize='xl' align="left"> {Topic2} </Text>
                            </Link>
                        </NextLink>
                    </Flex>
                </HStack>
            </Box>
        </Box>
    )
}

export default BoxSelect;