import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay,
    Box, Button, Center, Flex, Heading, HStack, Input, InputGroup, InputRightElement, Table, TableContainer, Tbody,
    Td, Th, Thead, Tr, useDisclosure, useToast
} from '@chakra-ui/react';
import axios from 'axios';
import { encode } from 'js-base64';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import Colour from "../../color/napalearncolor";
import Layout from "../../components/Layout";
import ProfesstionModal from '../../components/ProfesstionModal';
import url from '../url';
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'

export default () => {
    let line = {
        width: '100%',
        marginTop: '12px',
        height: '2px',
        bgColor: Colour.Darkblue,
        marginBottom: '12px',
    }
    let container = {
        width: '100%',
        maxWidth: '1300px',
        marginTop: '12px',
        bgColor: Colour.AlmostWhite,
    }
    let container1 = {
        width: '100%',
        maxWidth: '1300px',
        marginTop: '24px',
        bgColor: Colour.AlmostWhite,
    }
    let pagebox = {
        maxWidth: '1300px',
    }
    let boxPagination = {
        width: '1100px',
        marginTop: '18px',
    }

    const router = useRouter()
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [pageAmount, setPageAmount] = useState(1)
    const cancelRef = useRef()
    const [selected, setSelected] = useState(false)
    const {
        isOpen: isOpenAddModal,
        onOpen: onOpenAddModal,
        onClose: onCloseAddModal
    } = useDisclosure()
    const toast = useToast()

    // check user role
    useEffect(() => {
        const kickOut = () => {
            sessionStorage.clear()
            router.push('/')
            toast({
                title: 'Cannot access the website',
                description: "Please log in to use the website",
                status: 'error',
                duration: 5000
            })
        }
        if (sessionStorage.getItem('UserRole') == 1) {
            kickOut()
        }
    }, [])
    useEffect(() => {
        fetchData()
    }, [search, page])

    // on click delete material
    const onClickDelete = async () => {
        let pmid = (data[selected].professworkshopID)
        console.log(pmid)
        let result = await axios.delete(`${url}/api/Manage/deleteManage/deleteProMa`, {
            headers: {
                professworkshopid: pmid
            }
        })
        console.log(result)
        if (result) {
            toast({
                title: 'Delete Success',
                description: "Delete Material is complete",
                status: 'success',
                duration: 3000,
                isClosable: false,
            })
            setPage(1)
            setSearch('')
            setTimeout(function () {
                window.location.reload();
            }, 3000);
        }
        else {
            alert('Delete Failed')
        }
    }

    // deleteDialog when click delete button
    const deleteDialog = (onClose, isOpen, id = '') => {
        const OnClickDelete = () => {
            onClickDelete()
            onClose()
        }
        return (
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Material
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => OnClickDelete()} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        )
    }

    // fetch data all material
    const fetchData = async () => {
        let result = await axios.get(`${url}/api/Manage/getManage/getProMa`, {
            headers: {
                page: page,
                search: encode(search),
            }
        })
        setData(result.data)
        if (result.data.length !== 0) {
            setPageAmount(result.data[0].page_amount)
        }
    }

    return (
        <div className="">
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <div className="p-4 mt-1">
                    <Heading size='2xl'>[Admin] Manage Professional Material</Heading>
                    <Box sx={line}></Box>
                    <Flex align="center" justify="center">
                        <Box sx={container}>
                            <HStack variant='solid' justify='space-between'>
                                <Button borderRadius='md' bg={Colour.FirstPink} color='White' size='lg'
                                    _hover={{
                                        bg: 'White',
                                        border: '2px solid',
                                        color: Colour.FirstPink
                                    }}
                                    onClick={onOpenAddModal}>
                                    Add Material
                                </Button> {/* add material to open ProfesstionModal */}
                                <ProfesstionModal isOpen={isOpenAddModal} onClose={onCloseAddModal} mode='2' />
                                <Search icon={<BiSearchAlt />} onChange={(e) => { setSearch(e.target.value); setPage(1) }} />
                            </HStack>
                            <Box sx={container1}> {/* show all article */}
                                <TableContainer border={'1px solid' + Colour.LightGrey} borderRadius='12px' bgColor={Colour.White}>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th>ID</Th>
                                                <Th>Topic</Th>
                                                <Th>DateAdd</Th>
                                                <Th>Delete</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                data.map((item, index) => {
                                                    return (
                                                        <Tr key={index}>
                                                            <Td>{item.professworkshopID}</Td>
                                                            <Td>{item.topic}</Td>
                                                            <Td>{(new Date(item.dateadd)).toLocaleDateString()}</Td>
                                                            <Td>
                                                                <Button borderRadius='md' colorScheme='red' color='White' size='sm'
                                                                    _hover={{ bg: 'White', border: '2px solid', color: 'red' }}
                                                                    onClick={() => setSelected(index)}>
                                                                    Delete
                                                                </Button>
                                                                {deleteDialog(() => setSelected(null), selected === index ? true : false)}
                                                            </Td>
                                                        </Tr>
                                                    )
                                                })
                                            }
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Box sx={pagebox}> {/* pagination */}
                                <Flex align="center" justify="center" m={6}>
                                    <Box sx={boxPagination}>
                                        <Flex align="center" justify="center" gap="10">
                                            <Pagination text="First Page" disabled={page === 1}
                                                icon={<FiChevronsLeft />} page={() => { setPage(1) }} />
                                            <Pagination text="Prev Page" disabled={page === 1}
                                                icon={<FiChevronLeft />} page={() => { if (page > 1) setPage(page - 1) }} />
                                            <center>
                                                <Heading size='md' color="#3E3C6E">Page {page} of {pageAmount}</Heading>
                                            </center>
                                            <Pagination text="Next Page" disabled={page === parseInt(pageAmount)}
                                                icon2={<FiChevronRight />} page={() => { if (page < pageAmount) setPage(page + 1) }} />
                                            <Pagination text="Last Page" disabled={page === parseInt(pageAmount)}
                                                icon2={<FiChevronsRight />} page={() => { setPage(parseInt(pageAmount)) }} />
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Flex>
                </div>
            </Layout>
        </div>
    );
}