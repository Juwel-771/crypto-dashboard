import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navlink = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack justify="space-between" boxShadow="sm" maxW="16rem" h="100vh">
      <Box>
        <Heading fontSize="20px" pt="2.5rem" textAlign="center" as="h1">
          Crypto Track
        </Heading>
        <Box mt="4" mx="3">
          {navlink.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {" "}
                {nav.text}{" "}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="4" mx="3" mb="6">
        <HStack
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
