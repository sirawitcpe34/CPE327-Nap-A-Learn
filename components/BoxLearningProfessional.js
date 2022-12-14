import React from "react";
import { Box, Link, Image, Heading, Text } from "@chakra-ui/react";
import Colour from "../color/napalearncolor";
import NextLink from "next/link";

let menu = {
    bgColor: Colour.White,
    width: '500px',
    height: '300px',
    marginTop: '36px',
    padding: "15px 15px 15px 15px",
}
let boxText = {
    bgColor: Colour.White,
    width: '400px',
    marginLeft: '10px',
    marginTop: '8px',
}

// learning and professional topic box
function BoxLearningProfessional({ link, image, headding, text }) {
    return (
        <NextLink href={link} passHref >
            <Link _hover={{
                color: Colour.FirstPink,
            }}>
                <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
                    <Image align='center' src={image} alt="Picture" height='75%' width='100%' rounded='md' />
                    <Box sx={boxText}>
                        <Heading align="left" color="#3E3C6E" size='xl'>{headding}</Heading>
                        <Text align="left">{text}</Text>
                    </Box>
                </Box>
            </Link>
        </NextLink>
    )
}

export default BoxLearningProfessional;