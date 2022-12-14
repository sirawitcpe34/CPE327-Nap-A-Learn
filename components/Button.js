import React from "react";
import { Button } from "@chakra-ui/react"
import Colour from "../color/napalearncolor"
import NextLink from "next/link"

// button with link pages
function ButtonNAL({ text, link }) {
    return (
        <NextLink href={link} passHref>
            <Button borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                }}>
                {text}
            </Button>
        </NextLink>
    )
}

export default ButtonNAL;