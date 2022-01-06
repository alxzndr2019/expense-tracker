import * as React from "react"
import{
    Box,
    Text,
    HStack,
} from "@chakra-ui/react"
import { RootStateOrAny, useSelector } from "react-redux"
export const Home: React.FC=()=>{
const user = useSelector((state:RootStateOrAny)=>state.user.value)

return(
    <Box  w={{base:"90%",md:"60%",lg:"70%"}} mx="auto">



         <Box w="100%" mb="10" bg="purple.100"  borderRadius={20}>
             <Box  p="10">
                 <Text align="left" textStyle="alphatext">
                Available balance 💰
            </Text>
            <Text align="left" textStyle="alphabal">
                ${user.balance}.00
            </Text> 
             </Box>
         </Box>
         <HStack spacing={35}>
              <Box w="50%" bg="green.100"    borderRadius={20}>
             <Box p="10">
               <Text align="left" textStyle="betatext">
                Total Inflow 😋
            </Text>
            <Text align="left" textStyle="betabal">
                ${user.inflow}.00
            </Text>  
             </Box>
         
         </Box>
         <Box w="50%" bg="red.100"  borderRadius={20} >
             <Box p="10">
                  <Text align="left" textStyle="kappatext">
                Total Outflow 😣
            </Text>
            <Text align="left" textStyle="kappabal">
                ${user.outflow}.00
            </Text>
             </Box>
         </Box>
         </HStack>
        
         <Box w="100%" bg="green.100" mt={10}  borderRadius={20}>
         <Text align="left" textStyle="betatext" p={10}>
               <i>History</i> 
            </Text>
         </Box>
         
    </Box>
    
)
}