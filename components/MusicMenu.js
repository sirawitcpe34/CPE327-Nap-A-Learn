import React from "react"
import { Image } from "@chakra-ui/react"
import Colour from "../color/napalearncolor"
import NextLink from "next/link"

// music menu and link pages
function MusicMenu({ src, link }) {
    return (
        <NextLink href={link} passHref>
            <Image src={src}
                width='150px'
                height='auto'
                alt="menu"
                _hover={{
                    padding: '10px',
                    border: '5px solid',
                    borderRadius: '10px',
                    color: Colour.FirstPink
                }} />
        </NextLink>
    )
}

export default MusicMenu;