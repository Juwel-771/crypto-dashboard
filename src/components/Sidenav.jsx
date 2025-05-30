import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react'
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
    <Stack>
        {
            navlink.map(nav => (
                <HStack key={nav.text}>
                    <Icon as = {nav.icon} />
                    <Text> {nav.text} </Text>
                </HStack>
            ))
        }
    </Stack>
  )
}

export default Sidenav