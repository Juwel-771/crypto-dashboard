import { Box, Button, Container, Flex, Heading, HStack, Portal } from "@chakra-ui/react";
import React from "react";
import { Menu } from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa6";


const Topnav = ({title}) => {
  return (
    <Box>
        <HStack maxW="60rem" h="16" justify="space-between" px="32" mx="auto">
        <Heading>{title}</Heading>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="solid" size="sm">
              <FaUserTie fontSize="24px"/>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt-a">
                  Logout
                </Menu.Item>
                <Menu.Item value="new-file-a">
                  Support
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        </HStack>
    </Box>
  );
};

export default Topnav;
