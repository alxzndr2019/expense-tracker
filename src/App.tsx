import * as React from "react"
import {
  ChakraProvider,
  Box
} from "@chakra-ui/react"
import theme from "./theme"

import { Home } from "./pages/Home"
import { Header } from "./components/Header"
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bg="brand.100" minHeight="100vh" textAlign="center" fontSize="xl">
        <Header/>
       <Home/>
    </Box>
  </ChakraProvider>
)
