import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Stack,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'
import { useState } from 'react';

export function CreateAccountModal() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <Button mr={5} bg='#d8e2dc' cursor='pointer' onClick={onOpen}>Create Account</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Stack spacing={3}>
                        <Input placeholder='Username' size='md' variant='filled' required/>
                        <Input placeholder='Email' size='md' variant='filled'/>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
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
                                type={show ? 'text' : 'password'}
                                placeholder='Confirm password'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>Submit</Button>
                        <Button variant='ghost' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
        
    )
  }