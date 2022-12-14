import Head from "next/head";
import {
    Heading, Wrap, Box, Flex, Center, AspectRatio, useCheckboxGroup, useCheckbox, Text, chakra,
    useToast, Alert, AlertIcon, Badge, Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import Layout from "../../../components/Layout";
import Colour from "../../../color/napalearncolor";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FiChevronRight, FiChevronLeft, FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { encode } from 'js-base64';
import { useRouter } from 'next/router';
import ButtonNAL from '../../../components/Button';
import Pagination from '../../../components/Pagination';
import Search from '../../../components/Search';
import url from "../../url";

// checkbox filter
function CustomCheckbox(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
        useCheckbox(props)

    const toast = useToast()

    return (
        <chakra.label
            display='flex'
            flexDirection='row'
            alignItems='center'
            gridColumnGap={2}
            maxW='275px'
            bg='#FE979C'
            border='2px solid'
            borderColor='#FE979C'
            rounded='md'
            px={3}
            py={1}
            cursor='pointer'
            {...htmlProps}
        >
            <input onClick={() => toast({
                position: 'bottom-right',
                render: () => (
                    <Alert status='info' color="#FFFFFF" bg="#FF969B">
                        <AlertIcon color="#FFFFFF" />
                        Material changed !
                    </Alert>
                ),
            })} {...getInputProps()} hidden />
            <Flex
                alignItems='center'
                justifyContent='center'
                border='2px solid'
                borderColor='#FFFFFF'
                w={4}
                h={4}
                {...getCheckboxProps()}
            >
                {state.isChecked && <Box w={2} h={2} bg='#FFFFFF' />}
            </Flex>
            <Text color="#FFFFFF" {...getLabelProps()}>{props.value}</Text>
        </chakra.label>
    )
}

export default (props) => {

    const [userID, setuserID] = useState('')
    useEffect(() => {
        setuserID(sessionStorage.getItem('usernumberID'))
    }, [])

    const router = useRouter()
    const [material, setmaterial] = useState([])
    const [page, setPage] = useState(1)
    const [pageAmount, setPageAmount] = useState(1)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const { value, getCheckboxProps } = useCheckboxGroup({ onChange: (value) => { setFilter(value); setPage(1) } })

    // fetch data according to the selected filter
    const fetchData = async () => {
        console.log(filter)
        let skilltostring1 = ''
        let skilltostring2 = ''
        let skilltostring3 = ''
        let skilltostring4 = ''
        let skilltostring5 = ''
        let skilltostring6 = ''
        let skilltostring7 = ''
        let skilltostring8 = ''
        let skilltostring9 = ''
        let skilltostring10 = ''
        let skilltostring11 = ''
        let skilltostring12 = ''
        let skilltostring13 = ''

        if (filter[0] !== undefined) {
            skilltostring1 = filter[0].toString()
        }
        if (filter[1] !== undefined) {
            skilltostring2 = filter[1].toString()
        }
        if (filter[2] !== undefined) {
            skilltostring3 = filter[2].toString()
        }
        if (filter[3] !== undefined) {
            skilltostring4 = filter[3].toString()
        }
        if (filter[4] !== undefined) {
            skilltostring5 = filter[4].toString()
        }
        if (filter[5] !== undefined) {
            skilltostring6 = filter[5].toString()
        }
        if (filter[6] !== undefined) {
            skilltostring7 = filter[6].toString()
        }
        if (filter[7] !== undefined) {
            skilltostring8 = filter[7].toString()
        }
        if (filter[8] !== undefined) {
            skilltostring9 = filter[8].toString()
        }
        if (filter[9] !== undefined) {
            skilltostring10 = filter[9].toString()
        }
        if (filter[10] !== undefined) {
            skilltostring11 = filter[10].toString()
        }
        if (filter[11] !== undefined) {
            skilltostring12 = filter[11].toString()
        }
        if (filter[12] !== undefined) {
            skilltostring13 = filter[12].toString()
        }

        let result = await axios.get(`${url}/api/LearningMaterial/getLearningMaterial`, {
            headers: {
                page: page,
                search: encode(search),
                filter1: encode(skilltostring1),
                filter2: encode(skilltostring2),
                filter3: encode(skilltostring3),
                filter4: encode(skilltostring4),
                filter5: encode(skilltostring5),
                filter6: encode(skilltostring6),
                filter7: encode(skilltostring7),
                filter8: encode(skilltostring8),
                filter9: encode(skilltostring9),
                filter10: encode(skilltostring10),
                filter11: encode(skilltostring11),
                filter12: encode(skilltostring12),
                filter13: encode(skilltostring13),
            }
        })
        setmaterial(result.data)
        if (result.data.length !== 0) {
            setPageAmount(result.data[0].page_amount)
        }
    }

    // fetch data when filter, search, page change
    useEffect(() => {
        fetchData()
    }, [filter, search, page])

    const onClickMaterial = (id) => {
        router.push(`/learning/learningmaterialID/${id}`)
    }

    let line = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '12px',
        height: '2px',
    }
    let boxPagination = {
        width: '100%',
        maxWidth: '1250px',
        marginTop: '25px',
    }
    let boxMaterial = {
        bgColor: Colour.White,
        width: '275px',
        height: '300px',
        boxShadow: 'lg',
        rounded: 'md',
    }
    let boxTopic = {
        width: '100%',
        height: '150px',
        p: "12px",
        marginTop: '-6px',
    }
    let boxTab = {
        width: '100%',
        maxWidth: '1250px',
        height: '100%',
        padding: '6px',
    }
    let boxFilter = {
        width: '100%',
        maxWidth: '1250px',
    }

    return (
        <div>
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl' color='#3E3C6E'>Learning Material</Heading>
                    <Box sx={line}></Box>
                    <Wrap align='center' justify='center' spacingX='50px' spacingY='25px'>
                        <Search icon={<BiSearchAlt />} onChange={(e) => { setSearch(e.target.value); setPage(1) }} />
                        <Box sx={boxTab}>
                            <Tabs variant='soft-rounded' marginLeft='-25px' >
                                <TabList> {/* Tab Filter */}
                                    <Tab _selected={{
                                        color: 'purple',
                                        bgColor: 'pink'
                                    }}
                                        _hover={{
                                            bg: 'White',
                                            border: '2px solid',
                                            color: Colour.FirstPink
                                        }}>
                                        <Heading size='md'>Filter By Skills</Heading></Tab>
                                    <Tab _selected={{ color: 'purple', bgColor: 'pink' }} _hover={{ bg: 'White', border: '2px solid', color: Colour.FirstPink }}>
                                        <Heading size='md'>Filter By Missing Skills</Heading></Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel> {/* Tab Filter By Skills */}
                                        <Box sx={boxFilter}>
                                            <Wrap>
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการสื่อสาร' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการดูแลตัวเอง' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการดำรงชีวิต' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะทางสังคม' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการรู้จักใช้ทรัพยากร' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการควบคุมตัวเอง' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการนำความรู้มาใช้ในชีวิต' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการทำงาน' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการใช้เวลาว่าง' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะการรักษาสุขอนามัย' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะด้านพฤติกรรมและอารมณ์' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะด้านการสื่อความหมาย' })} />
                                                <CustomCheckbox {...getCheckboxProps({ value: 'ทักษะด้านสังคม' })} />
                                            </Wrap>
                                        </Box>
                                    </TabPanel>
                                    <TabPanel> {/* Tab Filter By Questionnaire 1, 2 */}
                                        <Wrap>
                                            <ButtonNAL text="Filter By Questionnaire 1" link={`/learning/material/filterq1/${userID}`} />
                                            <ButtonNAL text="Filter By Questionnaire 2" link={`/learning/material/filterq2/${userID}`} />
                                        </Wrap>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box> {/* show Material */}
                        {
                            material.map((item, index) => {
                                return (
                                    <Center>
                                        <Box key={index} sx={boxMaterial} _hover={{ color: Colour.FirstPink }}
                                            onClick={() => onClickMaterial(item.learningmaterialID)}>
                                            <AspectRatio height='150px' ratio={16 / 9}>
                                                <iframe src={item.url} allowFullScreen></iframe>
                                            </AspectRatio>
                                            <Box sx={boxTopic}>
                                                <Badge fontSize='13px' colorScheme='pink'>{item.forskillID}</Badge>
                                                <Heading noOfLines={4} size={18} fontSize='18px'> {item.topic}</Heading>
                                            </Box>
                                        </Box>
                                    </Center>
                                )
                            })
                        }
                    </Wrap> {/* show Pagination */}
                    <Flex align="center" justify="center" m={6}>
                        <Box sx={boxPagination}>
                            <Flex align="center" justify="center" gap="10">
                                <Pagination text="First Page" disabled={page === 1} icon={<FiChevronsLeft />}
                                    page={() => { setPage(1) }} />
                                <Pagination text="Prev Page" disabled={page === 1} icon={<FiChevronLeft />}
                                    page={() => { if (page > 1) setPage(page - 1) }} />
                                <center>
                                    <Heading size='md' color="#3E3C6E">Page {page} of {pageAmount}</Heading>
                                </center>
                                <Pagination text="Next Page" disabled={page === parseInt(pageAmount)} icon2={<FiChevronRight />}
                                    page={() => { if (page < pageAmount) setPage(page + 1) }} />
                                <Pagination text="Last Page" disabled={page === parseInt(pageAmount)} icon2={<FiChevronsRight />}
                                    page={() => { setPage(parseInt(pageAmount)) }} />
                            </Flex>
                        </Box>
                    </Flex>
                </div>
            </Layout>
        </div>
    )
}
