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

// skill boxes for each skills of the autism questionnaire.
function BoxAllSkillA({ skill1, skill2, skill3, data }) {
    return (
        <div>
            <Heading align='center' size='lg'>รายละเอียดผลการคัดกรอง</Heading>
            <Center>
                <Box sx={boxBar} boxShadow='md' p='6' rounded='md'> {/* pie chart for show result from questionnire */}
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
            <Wrap spacing='30px' justify='center'>
                <WrapItem>
                    <BoxSkill text="ด้านพฤติกรรมและอารมณ์" score={skill1} image='/image/communication.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ด้านการสื่อความหมาย" score={skill2} image='/image/self-improvement.png' />
                </WrapItem>
                <WrapItem>
                    <BoxSkill text="ด้านสังคม" score={skill3} image='/image/homepage.png' />
                </WrapItem>
            </Wrap>
            <Box sx={boxFooter}></Box>
        </div>
    )
}

export default BoxAllSkillA;