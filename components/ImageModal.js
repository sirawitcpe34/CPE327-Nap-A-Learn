import { Alert, AlertIcon, Box, Button, ButtonGroup, Container, Image, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import Colour from "../color/napalearncolor"
import url from '../pages/url'

// change profile image modal
export default function ImageModal({ isOpen, onClose, usernumberID }) {

  let pinkbutton = {
    backgroundColor: '#FE979B'
  }
  let preview = {
    width: '160px',
    height: '160px',
    margin: '12px',
    marginBottom: '24px',
    borderWidth: '3px',
    borderRadius: 'lg'
  }

  const onCancel = () => {
    onClose()
  }

  const [form, setForm] = useState(
    { url: "" })

  const [wrong, setWrong] = useState(false)
  const [pre, setPreview] = useState(false)
  const [wrongWord, setWrongWord] = useState('')
  const toast = useToast()

  const onPreviewClick = () => {
    setPreview(true)
  }
  {/* confirm button */ }
  const onSummitClick = async () => {
    console.log('summit clicked!')
    if (form.url) {
      setWrong(false)
      axios.post(`${url}/api/Profile/updateImage`, { ...form, usernumberid: usernumberID })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      toast({
        title: 'Success submit',
        description: "Update Profile Image is complete",
        status: 'success',
        duration: 3000,
        isClosable: false,
      })
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
    else {
      setWrong(true)
      setWrongWord('Please complete field')
    }
  }

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
        size='4xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change your Profile Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box sx={preview} display="flex" alignItems="center" justifyContent="space-between">
              {(pre) ?
                <Image
                  borderRadius='full'
                  boxSize='150px'
                  src={form.url}
                /> :
                <Container centerContent='true'>Preview</Container>}
            </Box>
            <Stack spacing={4}>
              <InputGroup size='md'>
                <Input placeholder='URL Image' _placeholder={{ opacity: 0.8, color: 'black' }}
                  focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                  value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
              </InputGroup>
              <Box>
                {
                  (wrong) ?
                    <Alert status='error'
                      bg='none'
                      color='red'
                      position='absolute'
                      align='center'
                    >
                      <AlertIcon />
                      {wrongWord}
                    </Alert>
                    : null
                }
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup marginBottom='12px' width='100%' justifyContent='right'>
              <Button colorScheme='' size='lg' sx={pinkbutton} _hover={{
                bg: 'White', border: '2px solid', color: Colour.FirstPink
              }} onClick={onSummitClick}> Submit
              </Button>
              <Button colorScheme='' size='lg' sx={pinkbutton} _hover={{
                bg: 'White', border: '2px solid', color: Colour.FirstPink
              }} onClick={onPreviewClick}> Preview
              </Button>
              <Button colorScheme='' size='lg' sx={pinkbutton} _hover={{
                bg: 'White', border: '2px solid', color: Colour.FirstPink
              }} onClick={onCancel}> Cencel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}