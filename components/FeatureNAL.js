import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

let boxContent = {
  width: '300px',
  padding: '12px',
}
let boxContent1 = {
  maxWidth: '270px',
  minWidth: '200px',
  backgroundColor: 'white',
  padding: '12px',
  boxShadow: 'md',
  rounded: 'md',
  marginTop: '18px',
}
let informationHeadingText = {
  fontSize: '4xl',
  color: '#3E3C6E',
  fontWeight: 'bold'
}

let informationText = {
  textAlign: 'center',
  padding: '12px'
}

// feature nap a learn
function FeatureNAL ({topic, text, image}) {
    return (
      <Flex sx={boxContent}>
      <Box align="center" justify="center">
        <Box>
          <Image marginBottom='20px' src={image} />
          <Text sx={informationHeadingText}> {topic} </Text>
        </Box>
        <Flex sx={boxContent1}>
          <Text sx={informationText}> {text} </Text>
        </Flex>
      </Box>
    </Flex>
    )
}

export default FeatureNAL;