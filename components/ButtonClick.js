import React from "react";
import { Button } from "@chakra-ui/react";
import Colour from "../color/napalearncolor";

let pinkbutton = {
  backgroundColor: '#FE979B'
} 

// button and onclick
function ButtonClick({ text, click}) {
  return (
    <Button marginTop='40px' colorScheme='' size='lg' sx={pinkbutton} _hover={{
      bg: 'White', border: '2px solid', color: Colour.FirstPink
    }} onClick={click}> {text}
    </Button>
  )
}

export default ButtonClick;