import { Box, Flex, Heading, Button, Text } from '@chakra-ui/react';
import Colour from "../color/napalearncolor";
import { PieChart } from 'react-minimal-pie-chart';
import NextLink from 'next/link';

let boxBar = {
  bgColor: Colour.White,
  width: '350px',
  padding: '12px',
  marginLeft: '20px',
  marginRight: '20px',
  marginTop: '32px',
  marginBottom: '32px',
}
let boxButton = {
  bgColor: Colour.White,
  padding: '12px',
  marginTop: '18x',
}

// abbreviated questionnaire result display box
function BoxResultDashboard({ mode, check, datetime, data }) {
  return (
    <div>
      <Box w='600px' align="center" justify="center">
        {(mode) == 1 ?
          <Heading as='h4' size='md'>
            ผลการคัดกรองบุคคลที่มีความบกพร่องทางสติปัญญา
          </Heading> :
          <Heading as='h4' size='md'>
            ผลการคัดกรองบุคคลออทิสติก
          </Heading>}
        {(check) == 1 ?
          <Flex align="center" justify="center">
            <Box sx={boxBar} boxShadow='md' p='6' rounded='md' align="center" justify="center">
              <Box sx={boxButton} >
                <Heading>ยังไม่ได้ทำการทดสอบ</Heading>
              </Box>
              {(mode) == 1 ?
              <Box sx={boxButton} justify="center">
                <NextLink href="/question/question1" passHref>
                  <Button width='100%' borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                    _hover={{
                      bg: 'White',
                      border: '2px solid',
                      color: Colour.FirstPink
                    }} >
                    Go to Questionnaire
                  </Button>
                </NextLink>
              </Box> :
              <Box sx={boxButton} justify="center">
              <NextLink href="/question/question2" passHref>
                <Button width='100%' borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                  _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                  }} >
                  Go to Questionnaire
                </Button>
              </NextLink>
            </Box>}
            </Box>
          </Flex> :
          <Box sx={boxBar} boxShadow='md' p='6' rounded='md'>
            {/* pie chart to show result from questionnaire */}
            <PieChart
              animate
              animationDuration={40}
              animationEasing="ease-in"
              center={[50, 50]}
              data={data}
              lineWidth={30}
              lengthAngle={360}
              paddingAngle={0}
              radius={50}
              rounded
              startAngle={0}
              viewBoxSize={[100, 100]}
              labelStyle={{
                fontSize: "6px",
                fontColor: "FFFFFA",
                fontWeight: "800",
              }}
              label={(data) => data.dataEntry.title + " " + data.dataEntry.value}
              labelPosition={50}
            />
            <Text marginTop="18px" align='center' fontSize='lg'>สรุปผลการประเมินทักษะในปัจจุบัน </Text>
            <Text marginTop="6px" align='center' fontSize='lg'>วันที่ประเมิน {(new Date(datetime)).toLocaleString()}</Text>
          </Box>}
      </Box>
    </div>
  )
}

export default BoxResultDashboard;