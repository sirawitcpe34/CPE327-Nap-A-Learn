import Head from "next/head";
import Layout from "../../../components/Layout";
import { Box, Heading, Flex, Wrap } from '@chakra-ui/react';
import Colour from "../../../color/napalearncolor";
import axios from 'axios';
import url from '../../url';
import { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router';
import Loading from '../../../components/SubLoading';


export default (props) => {

    const [loading, setLoading] = useState(false);

    let line = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '12px',
        height: '2px',
    }
    let boxImage = {
        bgColor: Colour.Darkblue,
        width: '100%',
        marginTop: '36px',
    }
    let boxHeading = {
        width: '1300px',
    }
    let boxText = {
        width: '100%',
        maxWidth: '1300px',
    }

    const router = useRouter()
    const paID = router.query.professarticleID
    console.log(paID)
    const [result, setResult] = useState([])

    // fetch data each article when query is professtionarticleID
    const fetchData = async () => {
        let result = await axios.get(`${url}/api/ProfesstionArticle/${paID}`, {
        })
        setResult(result.data)
        console.log(result)
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        if (paID) { fetchData() }
    }, [])

    return (
        <div className="">
            <Head>
                <title>Nap A Learn Website</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <Layout>
                <Loading isLoading={loading} />
                <div className="p-4 mt-1 mb-6">
                    <Heading size='2xl'>Article</Heading>
                    <Box sx={line}></Box>
                    <Flex align="center" justify="center"> {/* show each article */}
                        <Wrap align='center' justify='center' spacingX='50px' spacingY='12px'>
                            <Flex>
                                <Box sx={boxImage}>
                                    <img src={result.url} width='1300px' height='400px'  ></img>
                                </Box>
                            </Flex>
                            <Box sx={boxHeading}>
                                <Heading size='2xl' color="#3E3C6E" marginTop='10px'>{result.topic}</Heading>
                            </Box>
                            <Box sx={boxText}>
                                <Heading size='md' marginTop='10px'>{result.content}</Heading>
                            </Box>
                        </Wrap>
                    </Flex>
                </div>
            </Layout>
        </div>
    )
}

