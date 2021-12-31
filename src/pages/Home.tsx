import * as React from "react"
import{
    Box,
    Text,
    HStack

} from "@chakra-ui/react"

export const Home: React.FC=()=>{
return(
    <Box  w={{base:"90%",md:"60%",lg:"70%"}} mx="auto">
         <Box w="100%" mb="10" bg="purple.100"  borderRadius={20}>
             <Box  p="10">
                 <Text align="left" textStyle="alphatext">
                Available balance 💰
            </Text>
            <Text align="left" textStyle="alphabal">
                $2000.00
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
                $1200.00
            </Text>  
             </Box>
         
         </Box>
         <Box w="50%" bg="red.100"  borderRadius={20} >
             <Box p="10">
                  <Text align="left" textStyle="kappatext">
                Total Outflow 😣
            </Text>
            <Text align="left" textStyle="kappabal">
                $800.00
            </Text>
             </Box>
         </Box>
         </HStack>
        
         <Box>
             <h1>History</h1>
         </Box>
    </Box>
)
}