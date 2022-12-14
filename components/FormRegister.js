import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

// form in profile page
function FormRegister({ icon, text, value, change}) {
  return (
    <InputGroup size='md'>
      <InputLeftElement pointerEvents='none' children={icon} />
      <Input placeholder={text} _placeholder={{ opacity: 0.8, color: 'white' }}
        focusBorderColor={Colour.FirstPink} color="white" colorScheme="white"
        value={value} onChange={change} />
    </InputGroup>
  )
}

export default FormRegister;