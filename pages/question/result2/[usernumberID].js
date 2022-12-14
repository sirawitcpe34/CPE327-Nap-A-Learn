import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack
} from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import NextLink from "next/link";
import Colour from "../../../color/napalearncolor";
import BoxAllSkillA from '../../../components/BoxAllSkillA';
import BoxSummary from "../../../components/BoxSummaryA";
import Layout from "../../../components/Layout";
import BoxNoData from '../../../components/BoxNoData';
import url from '../../url';
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router';
import Loading from '../../../components/SubLoading';

export default () => {

  const [loading, setLoading] = useState(false);

  let line = {
    width: '100%',
    marginTop: '12px',
    height: '2px',
    bgColor: Colour.Darkblue
  }
  let boxSelect = {
    padding: '8px',
    height: '40px',
    marginLeft: '20px',
    marginTop: '24px',
  }
  let boxResult = {
    bgColor: Colour.White,
    width: '80%',
    padding: '12px',
    paddingTop: '20px',
    paddingLeft: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '32px',
    marginBottom: '32px',
  }
  let boxButton = {
    bgColor: Colour.White,
    width: '40%',
    padding: '12px',
    marginTop: '24px',
    marginBottom: '24px',
  }
  let boxData = {
    width: '90%',
    marginTop: '32px',
  }
  let boxData1 = {
    bgColor: Colour.White,
  }

  const router = useRouter()
  const userID = router.query.usernumberID
  console.log(userID)
  const [result, setResult] = useState([])

  // fetch data result from question 2 when query is usernumberID
  const fetchData = async () => {
    let result = await axios.get(`${url}/api/Result/getResult2/${userID}`, {
    })
    setResult(result.data)
    console.log(result)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    if (userID) { fetchData() }
  }, [])

   // fetch data result each question to evaluate the skill list
   let response = Object.values(result).map(value => value)
   let point = 0
   let apoint = 0
   let bpoint = 0
   let cpoint = 0
 
   for (let i = 0; i <= 17; i++) {
     point = point + parseInt(response[i])
   }
   for (let i = 18; i <= 35; i++) {
     apoint = apoint + parseInt(response[i])
   }
   for (let i = 36; i <= 53; i++) {
     bpoint = bpoint + parseInt(response[i])
   }
   for (let i = 54; i <= 71; i++) {
     cpoint = cpoint + parseInt(response[i])
   }

  let check = (point) < 0 ? 1 : 0
  let skill1 = (parseInt(response[0]) + parseInt(response[1]) + parseInt(response[2]) + parseInt(response[3]) + parseInt(response[4])) <= 3 ? 0 : 1
  let skill2 = (parseInt(response[5])+ parseInt(response[6]) + parseInt(response[7]) + parseInt(response[8]) + parseInt(response[9]) + parseInt(response[10]) + parseInt(response[11])) <= 5 ? 0 : 1
  let skill3 = (parseInt(response[12]) + parseInt(response[13]) + parseInt(response[14]) + parseInt(response[15]) + parseInt(response[16]) + parseInt(response[17])) <= 4 ? 0 : 1
  let pointskills = skill1 + skill2 + skill3
  let passvalue = (pointskills >= 2) ? 1 : 0
  let data = [
    { title: "ผ่าน", value: pointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - pointskills, color: "#FF7121" },
  ];

  let acheck = (apoint) < 0 ? 1 : 0
  let ause = (apoint) < 0 ? 0 : apoint
  let askill1 = (parseInt(response[18]) + parseInt(response[19]) + parseInt(response[20]) + parseInt(response[21]) + parseInt(response[22])) <= 3 ? 0 : 1
  let askill2 = (parseInt(response[23]) + parseInt(response[24]) + parseInt(response[25]) + parseInt(response[26]) + parseInt(response[27]) + parseInt(response[28]) + parseInt(response[29])) <= 5 ? 0 : 1
  let askill3 = (parseInt(response[30]) + parseInt(response[31]) + parseInt(response[32]) + parseInt(response[33]) + parseInt(response[34]) + parseInt(response[35])) <= 4 ? 0 : 1
  let apointskills = askill1 + askill2 + askill3
  let apassvalue = (apointskills >= 2) ? 1 : 0
  let adata = [
    { title: "ผ่าน", value: apointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - apointskills, color: "#FF7121" },
  ];

  let bcheck = (bpoint) < 0 ? 1 : 0
  let buse = (bpoint) < 0 ? 0 : bpoint
  let bskill1 = (parseInt(response[36]) + parseInt(response[38]) + parseInt(response[40]) + parseInt(response[42]) + parseInt(response[44])) <= 3 ? 0 : 1
  let bskill2 = (parseInt(response[46]) + parseInt(response[48]) + parseInt(response[50]) + parseInt(response[52]) + parseInt(response[54]) + parseInt(response[56]) + parseInt(response[58])) <= 5 ? 0 : 1
  let bskill3 = (parseInt(response[60]) + parseInt(response[62]) + parseInt(response[64]) + parseInt(response[66]) + parseInt(response[68]) +  parseInt(response[70])) <= 4 ? 0 : 1
  let bpointskills = bskill1 + bskill2 + bskill3
  let bpassvalue = (bpointskills >= 2) ? 1 : 0
  let bdata = [
    { title: "ผ่าน", value: bpointskills, color: "#97CF47" },
    { title: "ไม่ผ่าน", value: 3 - bpointskills, color: "#FF7121" },
  ];

  let cuse = (cpoint) < 0 ? 0 : cpoint

  return (
    <div className="">
      <Head>
        <title>Nap A Learn Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Layout>
      <Loading isLoading={loading} />
        <div className="p-4 mt-1">
          <Heading size='xl'>ผลการคัดกรองบุคคลออทิสติก</Heading>
          <Box sx={line}></Box> {/* check result if the test is not performed */}
          {(check) == 1 ?
            <Flex align="center" justify="center">
              <Box sx={boxResult} boxShadow='md' p='6' rounded='md' align="center" justify="center">
                <Box sx={boxButton}>
                  <Heading>ยังไม่ได้ทำการทดสอบ</Heading>
                </Box>
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
                </Box>
              </Box>
            </Flex> :
            <Tabs variant='soft-rounded' colorScheme="pink">
              <Box sx={boxSelect}>
                <TabList>
                  <Tab _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                  }}>ผลการทดสอบปัจจุบัน</Tab>
                  <Tab _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                  }}>ผลการทดสอบย้อนหลัง 2 ครั้งล่าสุด</Tab>
                </TabList>
              </Box>
              <TabPanels>
                <TabPanel> {/* tab current result */}
                  <VStack spacing={8} align="center">
                    <BoxSummary point={point} pointbefore={ause} passvalue={passvalue} />
                    <BoxAllSkillA skill1={skill1} skill2={skill2} skill3={skill3} data={data} />
                  </VStack>
                </TabPanel>
                <TabPanel> {/* tab two last result */}
                  <Flex justifyContent='center'>
                    <Box sx={boxData} align="center" >
                      <Accordion allowToggle>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(result.adatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {(new Date(result.adatetime)).toLocaleString()}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel pb={4}>
                           {/* result olddata 1 */}
                            {(acheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={apoint} pointbefore={buse} passvalue={apassvalue} />
                                <BoxAllSkillA skill1={askill1} skill2={askill2} skill3={askill3} data={adata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <h2>
                            <Box sx={boxData1}>
                              <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                  {(result.bdatetime) == -1 ? <Text>ไม่มีข้อมูลย้อนหลัง</Text> :
                                    <Text>ข้อมูลย้อนหลังวันที่ {(new Date(result.bdatetime)).toLocaleString()}</Text>}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </Box>
                          </h2>
                          <AccordionPanel>
                            {/* result olddata 2 */}
                            {(bcheck) == 1 ?
                              <BoxNoData /> :
                              <VStack spacing={8} align="center">
                                <BoxSummary point={bpoint} pointbefore={cuse} passvalue={bpassvalue} />
                                <BoxAllSkillA skill1={bskill1} skill2={bskill2} skill3={bskill3} data={bdata} />
                              </VStack>}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </Box>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>}
        </div>
      </Layout>
    </div>
  );
}

