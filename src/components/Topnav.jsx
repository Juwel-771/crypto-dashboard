import { Box, Button, Container, Flex, Heading, HStack, Portal } from "@chakra-ui/react";
import React from "react";
import { Menu } from "@chakra-ui/react";

const Topnav = () => {
  return (
    <Box boxShadow="xl">
        <HStack maxW="60rem" h="16" justify="space-between" px="32" mx="auto">
        <Heading>Dashboard</Heading>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="solid" size="sm">
              Action
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt-a">
                  New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="new-file-a">
                  New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="new-win-a">
                  New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="open-file-a">
                  Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
                </Menu.Item>
                <Menu.Item value="export-a">
                  Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
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
