import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

let FormBox = {
  minW: '200px',
  maxW: '600px',
  height: '40px',
  borderRadius: 'lg',
  backgroundColor: 'white',
  align: 'center',
}

// form in profile page
function FormProfile ({ check, id, value, disable, change ,text}) {
  return (
    <FormControl isRequired isInvalid={check}>
      <FormLabel htmlFor={id} fontSize='20px' >{text}</FormLabel>
      <Box sx={FormBox}>
        <Input id={id} value={value} isDisabled={disable} _disabled={{ opacity: 0.6 }}
          colorScheme="white" focusBorderColor={Colour.FirstPink}
          onChange={change}
        /></Box>
    </FormControl>
  )
}

export default FormProfile;