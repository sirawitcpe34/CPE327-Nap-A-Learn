import { Alert, AlertIcon, Box, Button, ButtonGroup, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Colour from "../color/napalearncolor"
import url from '../pages/url'

// change password modal and function
export default function PasswordModal({ isOpen, onClose, usernumberID, userrole }) {

  let pinkbutton = {
    backgroundColor: '#FE979B'
  }
  const onCancel = () => {
    onClose()
  }
  const [form, setForm] = useState(
    { currentpassword: "", password: "", confirmpassword: "" })
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [show1, setShow1] = React.useState(false)
  const handleClick1 = () => setShow1(!show1)
  const [wrong, setWrong] = useState(false)
  const [wrongWord, setWrongWord] = useState('')
  const toast = useToast()
  const router = useRouter()
  const onSummitClick = async () => {
    if (userrole == 1) {
      console.log('summit clicked!')
      if (form.currentpassword && form.password && form.confirmpassword) {

        if (form.password != form.confirmpassword) {
          setWrong(true)
          setWrongWord('Please enter the same password')
        }
        else {
          let result = await axios.post(`${url}/api/Profile/checkPassword`, {
            currentpassword: form.currentpassword,
            usernumberid: usernumberID
          })
          console.log(result.data.password)
          if (result.data.password == null) {
            setWrong(true)
            setWrongWord('Wrong password')
          }
          else {
            setWrong(false)
            axios.post(`${url}/api/Profile/updatePassword`, { ...form, usernumberid: usernumberID })
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
            toast({
              title: 'Success submit',
              description: "Update Password is complete",
              status: 'success',
              duration: 3000,
              isClosable: false,
            })
            setTimeout(() => {
              router.push('/login')
            }, 3000)
          }
        }
      }
      else {
        setWrong(true)
        setWrongWord('Please complete all fields')
      }
    }
    else {
      console.log('summit clicked!')
      if (form.password && form.confirmpassword) {
        if (form.password != form.confirmpassword) {
          setWrong(true)
          setWrongWord('Please enter the same password')
        }
        else {
          setWrong(false)
          axios.post(`${url}/api/Profile/updatePassword`, { ...form, usernumberid: usernumberID })
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
          toast({
            title: 'Success submit',
            description: "Reset Password is complete",
            status: 'success',
            duration: 3000,
            isClosable: false,
          })
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        }
      }
      else {
        setWrong(true)
        setWrongWord('Please complete all fields')
      }
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
          {(userrole) == 1 ?
            <ModalHeader>  Change your password </ModalHeader> :
            <ModalHeader>  Change or Reset your password by Admin  </ModalHeader>}
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              {(userrole) == 1 ?
                <InputGroup size='md'>
                  <Input placeholder='Current Password' _placeholder={{ opacity: 0.8, color: 'black' }}
                    focusBorderColor={Colour.FirstPink} color="black" colorScheme="black"
                    value={form.currentpassword} onChange={(e) => setForm({ ...form, currentpassword: e.target.value })} />
                </InputGroup> : null}
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='New Password'
                  _placeholder={{ opacity: 0.8, color: 'black' }}
                  focusBorderColor={Colour.FirstPink}
                  colorScheme="black"
                  color="black"
                  value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type={show1 ? 'text' : 'password'}
                  placeholder='Confirm New Password'
                  _placeholder={{ opacity: 0.8, color: 'black' }}
                  focusBorderColor={Colour.FirstPink}
                  colorScheme="black"
                  color="black"
                  value={form.confirmpassword} onChange={(e) => setForm({ ...form, confirmpassword: e.target.value })}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick1}>
                    {show1 ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
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
              }} onClick={onCancel}> Cencel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}