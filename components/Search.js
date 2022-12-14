import React from "react";
import { Box, Flex, InputGroup, InputRightElement, Input, Spacer } from '@chakra-ui/react'
import Colour from "../color/napalearncolor"

let searchbox = {
    width: '100%',
    maxWidth: '1250px',
}

// search box for user, article, material
function Search({ icon, onChange }) {
    return (
        <Box sx={searchbox}>
            <Flex>
                <Spacer />
                <InputGroup maxWidth='250px' marginTop='35px'>
                    <InputRightElement
                        pointerEvents='none'
                        children={icon}>
                    </InputRightElement>
                    <Input type='text'
                        placeholder='Search Topic'
                        bgColor={Colour.White}
                        onChange={onChange}>
                    </Input>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default Search;
