import {useState} from "react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import {Box, Text, Flex, Spacer, useDisclosure,  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Select,
 } from "@chakra-ui/react"
 import {addTransaction} from "../features/user"
import { useDispatch } from "react-redux"
export const Header: React.FC=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch()
    const transactionData ={
        title,
        amount,
        type
    }
    function handleDropdownChange(e: React.ChangeEvent<HTMLInputElement>) {
        setType(e.target.value );
      }
    return(
        <Box  w={{base:"90%",md:"60%",lg:"70%"}} mx="auto">
            <Flex>
                {/* The Modal to Add transactions */}
            <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input onChange={(e)=>setTitle(e.target.value)} value={title} mb={5} placeholder='Transaction Title'/>
         <Text>{type},{amount},{title}</Text>
          <Select placeholder='Transaction type' onchange={handleDropdownChange}>
            <option value='option1'>Credit</option>
            <option value='option2'>Debit</option>
          </Select>
          <Input onChange={(e)=>setAmount(parseInt(e.target.value))} value={amount} mt={5} placeholder='Amount'/>
          </ModalBody>

          <ModalFooter>
            <Button  colorScheme='blue' mr={3} onClick={onClose}>
             Add Transaction
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

                   <ColorModeSwitcher justifySelf="flex-end" />
                   <Spacer/>
                    <Text textStyle="betatext"><i>Trackr</i></Text>
                   <Spacer/>
                   <button onClick={onOpen} >Add transaction</button>
            </Flex>
        </Box>
      
        
    )
}