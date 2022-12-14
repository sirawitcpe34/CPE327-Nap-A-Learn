import { Box, Button, ButtonGroup, Center, FormControl, FormLabel, Grid, GridItem, Heading, Image, Input, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Colour from "../../color/napalearncolor";
import ImageModal from "../../components/ImageModal";
import Layout from "../../components/Layout";
import PasswordModal from "../../components/PasswordModal";
import url from '../url';
import ButtonClick from '../../components/ButtonClick';
import FormProfile from '../../components/FormProfile';

export default (props) => {
    const router = useRouter()
    const toast = useToast()
    const usernumberID = router.query.usernumberID
    const [ShowChangePassword, setShowChangePassword] = useState(false)
    const onClickShowChangePassword = () => setShowChangePassword(!ShowChangePassword)
    const [ShowChangePassword1, setShowChangePassword1] = useState(false)
    const onClickShowChangePassword1 = () => setShowChangePassword1(!ShowChangePassword1)
    const [error, setError] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [form, setForm] = useState({
        firstname: props.data.firstname, lastname: props.data.lastname,
        username: props.data.username, dob: props.data.dateofbirth,
        tel: props.data.telephonenumber, id: props.data.id
    })
    const [userrole, setRole] = useState('')

    useEffect(() => {
        setRole(sessionStorage.getItem('userrole'))
    }, [])

    const onSummitClick = () => {
        console.log("check form", form)
        if (form.firstname && form.lastname && form.tel && form.dob) {
            axios.post(`${url}/api/Profile/updateProfile`, { ...form, usernumberid: usernumberID })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            setError(false)
            toast({
                title: 'Success submit.',
                description: "The information has been updated.",
                status: 'success',
                duration: 3000,
                isClosable: false,

            })
            setTimeout(function () {
                window.location.reload();
            }, 3000);
            console.log('form is valid')
        }
        else {
            setError(true)
            toast({
                title: 'Error submit.',
                description: 'Some fields are error.',
                status: 'error',
                duration: 3000,
                isClosable: false,
                containerStyle: {
                    maxWidth: '700px',
                },
            })
            console.log('form is not valid')
        }
    }

    let line = {
        width: '100%',
        marginTop: '12px',
        height: '2px',
        bgColor: Colour.Darkblue,
        marginBottom: '12px',
    }
    let pinkbutton = {
        backgroundColor: '#FE979B'
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
                    <Heading size='2xl' marginLeft='30px' color={Colour.Darkblue} marginTop='10px'>My Profile</Heading>
                    <Box sx={line}></Box>
                </div>
                <Grid templateColumns='repeat(20, 2fr)' marginLeft='30px' gap={7}>
                    <GridItem colStart={1} colEnd={2}>
                        <Box minWidth='150px'>
                            <Image
                                marginLeft='50px'
                                borderRadius='full'
                                boxSize='150px'
                                src={props.data.url}
                            />
                        </Box>
                    </GridItem>
                    <GridItem colStart={3} colEnd={15} minWidth='200px'>
                        <Box marginTop='50px'>
                            <Text as='b' fontSize='3xl'>
                                {props.data.firstname} {props.data.lastname}
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem colStart={18}>
                        <Button marginLeft='60px' marginTop='50px' colorScheme='' size='lg' sx={pinkbutton}
                            onClick={onClickShowChangePassword1} onClose={onClickShowChangePassword1} _hover={{
                                bg: 'White', border: '2px solid', color: Colour.FirstPink
                            }}> Change Profile Image </Button> {/* click change profile image */}
                        <ImageModal isOpen={ShowChangePassword1} onClose={onClickShowChangePassword1} usernumberID={usernumberID} />
                    </GridItem>
                </Grid>

                {/* show detail profile */}
                <Grid templateColumns='repeat(20, 2fr)' marginLeft='30px' marginTop='30px'>
                    <GridItem colStart={4} colEnd={10}>
                        <FormProfile check={error && !form.username} id='username' value={form.username} text='Username'
                            disable='true' change={(e) => { setForm({ ...form, username: e.target.value }) }} />
                    </GridItem>
                    <GridItem colStart={11} colEnd={17}>
                        <FormProfile check={error && !form.id} id='id' value={form.id} text='ID'
                            disable='true' change={(e) => { setForm({ ...form, id: e.target.value }) }} />
                    </GridItem>
                </Grid>
                <Grid templateColumns='repeat(20, 2fr)' marginLeft='30px' marginTop='12px'>
                    <GridItem colStart={4} colEnd={10}>
                        <FormProfile check={error && !form.firstname} id='firstname' value={form.firstname} text='Firstname'
                            disable={!isEdit} change={(e) => { setForm({ ...form, firstname: e.target.value }) }} />
                    </GridItem>
                    <GridItem colStart={11} colEnd={17}>
                        <FormProfile check={error && !form.lastname} id='lastname' value={form.lastname} text='Lastname'
                            disable={!isEdit} change={(e) => { setForm({ ...form, lastname: e.target.value }) }} />
                    </GridItem>
                </Grid>
                <Grid templateColumns='repeat(20, 2fr)' marginLeft='30px' marginTop='12px'>
                    <GridItem colStart={4} colEnd={10}>
                        <FormProfile check={error && !form.dob} id='dob' value={form.dob} text='Date of Birth'
                            disable='true' change={(e) => { setForm({ ...form, dob: e.target.value }) }} />
                    </GridItem>
                    <GridItem colStart={11} colEnd={17}>
                        <FormProfile check={error && !form.tel} id='tel' value={form.tel} text='Telephone'
                            disable={!isEdit} change={(e) => { setForm({ ...form, tel: e.target.value }) }} />
                    </GridItem>
                </Grid>

                <Center> {/* when click edit to change submit and cencel */}
                    {!isEdit ?
                        <ButtonClick text='Edit' click={() => setIsEdit(true)} /> :
                        <ButtonGroup>
                            <ButtonClick text='Submit' click={() => onSummitClick()} />
                            <ButtonClick text='Cancel' click={() => setIsEdit(false)} />
                        </ButtonGroup>
                    }</Center>

                <div className="p-4 mt-1">
                    <Heading size='xl' marginLeft='30px' color={Colour.Darkblue} marginTop='30px'>Password</Heading>
                    <Box sx={line}></Box>
                </div>
                <Button marginLeft='60px' marginTop='10px' marginBottom='50px' colorScheme='' size='lg' sx={pinkbutton} onClick={onClickShowChangePassword} onClose={onClickShowChangePassword} _hover={{
                    bg: 'White',
                    border: '2px solid',
                    color: Colour.FirstPink
                }}> Change Password </Button> {/* click change password */}
                <PasswordModal isOpen={ShowChangePassword} onClose={onClickShowChangePassword} usernumberID={usernumberID} userrole={userrole} />
            </Layout>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    let usernumberID = context.params.usernumberID
    const data = await axios.get(`${url}/api/Profile/${usernumberID}`)
    return {
        props: {
            data: data.data,
        }
    }
}