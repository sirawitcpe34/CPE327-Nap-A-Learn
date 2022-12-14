import { Box, Center, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import Colour from "../color/napalearncolor";
import BoxSkill from "./BoxSkill";

let boxBar = {
    bgColor: Colour.White,
    width: '350px',
    padding: '12px',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '32px',
    marginBottom: '32px',
}
let boxFooter = {
    width: '100%',
    height: '16px',
}

// skill boxes for each skill of the cognitive disability questions.
function BoxAllSkillI({ skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9, skill10, data }) {
    return (
        <div>
            <Heading align='center' size='lg'>รายละเอียดผลการคัดกรอง</Heading>
            <Center>
                <Box sx={boxBar} boxShadow='md' p='6' rounded='md'>
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
                            fontSize: "7px",
                            fontColor: "FFFFFA",
                            fontWeight: "800",
                        }}
                        label={(data) => data.dataEntry.title + " " + data.dataEntry.value}
                        labelPosition={50}
                    />
                    <Text marginTop="18px" align='center' fontSize='lg'>สรุปผลการประเมินทักษะ </Text >
                </Box>
            </Center>
            <Wrap spacing='30px' justify='center'> {/* All skill status */}
                <WrapItem>
                    <BoxSkill text="ทักษะการสื่อสาร" score={skill1} image='/image/communication.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการดูแลตนเอง" score={skill2} image='/image/self-improvement.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการดํารงชีวิตภายในบ้าน" score={skill3} image='/image/homepage.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะทางสังคม/การปฏิสัมพันธ์กับผู้อื่น" score={skill4} image='/image/group.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการรู้จักใช้ทรัพยากรในชุมชน" score={skill5} image='/image/earth.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการรู้จักดูแลควบคุมตนเอง" score={skill6} image='/image/mindset.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการนําความรู้มาใช้ในชีวิตประจําวัน" score={skill7} image='/image/idea.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการทํางาน" score={skill8} image='/image/suitcase.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการใช้เวลาว่าง" score={skill9} image='/image/puzzle.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ทักษะการรักษาสุขอนามัย" score={skill10} image='/image/health-insurance.png' />
                </WrapItem>
            </Wrap>
            <Box sx={boxFooter}></Box>
        </div>
    )
}

export default BoxAllSkillI;