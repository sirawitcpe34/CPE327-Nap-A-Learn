import { Link, Text } from "@chakra-ui/react"
import Colour from "../color/napalearncolor"
import NextLink from 'next/link'

// sound menu and link pages
function SoundMenu({ link, title }) {
    return (
        <Link color={Colour.FirstPink}>
            <NextLink href={link} passHref>
                <Text color={Colour.NextPink} fontSize='28px'>{title}</Text>
            </NextLink>
        </Link>
    )
}
export default SoundMenu;