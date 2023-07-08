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
    input
  } from '@chakra-ui/react'

  export default function SignUp() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Create Account</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Account</ModalHeader>
                    <ModalCloseButton />

                </ModalContent>
            </Modal>
        </>
        
    )
  }