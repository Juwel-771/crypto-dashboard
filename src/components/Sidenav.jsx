import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";



const Sidenav = () => {

    const navlink = [
        {
            icon: BiSolidDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: GrTransaction,
            text: "Transaction",
            link: "/transaction"
        }
    ]
  return (
    <Stack boxShadow="sm" maxW="16rem" h="100vh">
        <Heading fontSize="20px" pt="2.5rem" textAlign="center" as="h1">Crypto Track</Heading>
        <Box mt="4" mx="3">
            {
            navlink.map(nav => (
                <HStack key={nav.text}>
                    <Icon as = {nav.icon} />
                    <Text> {nav.text} </Text>
                </HStack>
            ))
        }
        </Box>
    </Stack>
  )
}

export default Sidenav