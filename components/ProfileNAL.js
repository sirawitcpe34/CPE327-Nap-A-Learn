import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";

let boxProfile = {
  maxwidth: '270px',
  minWidth: '200px',
  padding: '12px',
}

let devImage = {
  borderRadius: 'full',
  boxSize: '200px',
  minWidth: '200px'
}

let devText = {
  as: 'b',
  fontSize: '2xl'
}

let devHeading = {
  marginTop: '32px',
  marginBottom: '5px'
}

// feature nap a learn
function ProfileNAL({ name, id, image }) {
  return (
    <Box sx={boxProfile} align="center" justify="center">
      <Image Image sx={devImage}
        src={image}
      />
      <Heading sx={devHeading}>
        {name}
      </Heading>
      <Text sx={devText}>{id}</Text>
    </Box>
  )
}

export default ProfileNAL;