import React from "react";
import { Button } from "@chakra-ui/react";
import Colour from "../color/napalearncolor";

// pagination button
function Pagination({ text, disabled, icon, page, icon2 }) {
    return (
        <Button border='2px' borderColor='#FF969B' onClick={page}
            isDisabled={disabled}
            _hover={{
                bg: 'White',
                border: '2px solid',
                color: Colour.FirstPink
            }}
            bg={Colour.FirstPink}
            color={Colour.White}> {icon} {text} {icon2}
        </Button>
    )
}

export default Pagination;