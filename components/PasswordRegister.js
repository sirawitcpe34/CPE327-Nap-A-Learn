import { Input, InputLeftElement, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

// form in profile page
function PasswordRegister ({ show, form, icon, change, text}) {
  
  const [showb, setShow] = React.useState(show)
  const handleClick = () => setShow(!showb)

  return (
    <InputGroup size='md'>
    <InputLeftElement pointerEvents='none' children={icon} />
    <Input
      pr='4.5rem'
      type={showb ? 'text' : 'password'}
      placeholder={text}
      _placeholder={{ opacity: 0.8, color: 'white' }}
      focusBorderColor={Colour.FirstPink}
      colorScheme="white"
      color="white"
      value={form} onChange={change}
    />
    <InputRightElement width='4.5rem'>
      <Button h='1.75rem' size='sm' onClick={handleClick}>
        {showb ? 'Hide' : 'Show'}
      </Button>
    </InputRightElement>
  </InputGroup>
  )
}

export default PasswordRegister;