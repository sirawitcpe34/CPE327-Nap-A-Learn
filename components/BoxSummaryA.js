import React from "react";
import { Box, HStack, Wrap, WrapItem } from '@chakra-ui/react'
import { Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from '@chakra-ui/react'
import Colour from "../color/napalearncolor"
import { GrScorecard, GrStatusCriticalSmall } from "react-icons/gr";
import { MdAutoGraph } from "react-icons/md";

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
let boxIcon = {
    bgColor: Colour.White,
    width: '70px',
    padding: '12px',
    justifyContent: 'center',
    alignItems: 'center',
}
let boxText = {
    bgColor: Colour.White,
    width: '250px',
    padding: '12px',
    justifyContent: 'center',
    alignItems: 'center',
}

// cognitive disability questionnaire score summary box
function BoxSummary({ point, pointbefore, passvalue }) {
    return (
        <Box sx={boxResult} boxShadow='md' p='6' rounded='md'>
            <StatGroup>
                <Wrap spacing='30px' justify='center'> {/* show the score summary */}
                    <WrapItem><Stat><HStack>
                        <Box sx={boxIcon}><GrScorecard size={50} /></Box>
                        <Box sx={boxText}>
                            <StatLabel>คะแนนรวมที่ได้</StatLabel>
                            <StatNumber>{point} คะแนน</StatNumber>
                            <StatHelpText>
                                / 18 คะแนน
                            </StatHelpText>
                        </Box>
                    </HStack></Stat></WrapItem>

                    <WrapItem><Stat><HStack>
                        <Box sx={boxIcon}>
                            {(point - pointbefore) > 0 ?
                                <MdAutoGraph size={50} color="#97CF47" /> :
                                <MdAutoGraph size={50} color="#FF7121" />
                            }
                        </Box>
                        <Box sx={boxText}> {/* show the improving score */}
                            <StatLabel>คะแนนพัฒนาการ</StatLabel>
                            <StatNumber>{point - pointbefore} คะแนน</StatNumber>
                            {(point - pointbefore) > 0 ?
                                <StatHelpText> มีพัฒนาการที่ดีขึ้น </StatHelpText> :
                                <StatHelpText> ไม่มีพัฒนาการที่ดีขึ้น </StatHelpText>
                            }
                        </Box>
                    </HStack></Stat></WrapItem>

                    <WrapItem><Stat><HStack>
                        <Box sx={boxIcon}>
                            {(passvalue) == 1 ?
                                <GrStatusCriticalSmall size={50} color="#97CF47" /> :
                                <GrStatusCriticalSmall size={50} color="#FF7121" />}
                        </Box>
                        <Box sx={boxText}> {/* show the pass or not */}
                            <StatLabel>สถานะ</StatLabel>
                            {(passvalue) == 1 ?
                                <StatNumber>ผ่าน</StatNumber> :
                                <StatNumber>ไม่ผ่าน</StatNumber>}
                            {(passvalue) == 1 ? // show the pass or not
                                <StatLabel>ไม่พบความบกพร่องทางออทิสติก</StatLabel> :
                                <StatLabel>มีโอกาสพบความบกพร่องทางออทิสติก</StatLabel>}
                        </Box>
                    </HStack></Stat></WrapItem>
                </Wrap>
            </StatGroup>
        </Box>
    )
}

export default BoxSummary;